import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectsDir = path.join(__dirname, '../public/projects');

// Create projects directory if it doesn't exist
if (!fs.existsSync(projectsDir)) {
    fs.mkdirSync(projectsDir, { recursive: true });
}

const images = [
    { name: 'cinetube', url: 'https://i.ibb.co/fzyLjfBP/cinetube.png' },
    { name: 'mealmate', url: 'https://i.ibb.co/99pqNzY5/mealmate.png' },
    { name: 'luxematches', url: 'https://i.ibb.co/vx9TYNmQ/luxematches.png' },
    { name: 'worknest', url: 'https://i.ibb.co/0RCbGQ0H/worknest.png' },
    { name: 'studysync', url: 'https://i.ibb.co/gbPCVRNN/studysync.png' },
    { name: 'toponemart', url: 'https://i.ibb.co/LXQHz0TZ/toponemart.png' },
    { name: 'pixelperfect', url: 'https://i.ibb.co/CpvBSP1X/pixelperfect.png' },
];

async function optimizeImage(image) {
    try {
        console.log(`Optimizing ${image.name}...`);
        const response = await fetch(image.url);
        const buffer = await response.arrayBuffer();

        const sharpImg = sharp(Buffer.from(buffer));

        // Convert to WebP and AVIF
        await sharpImg
            .resize(1000) // Max width 1000px
            .webp({ quality: 80 })
            .toFile(path.join(projectsDir, `${image.name}.webp`));

        await sharpImg
            .resize(1000)
            .avif({ quality: 75 })
            .toFile(path.join(projectsDir, `${image.name}.avif`));

        console.log(`✅ ${image.name} optimized.`);
    } catch (error) {
        console.error(`❌ Error optimizing ${image.name}:`, error.message);
    }
}

async function run() {
    console.log('🚀 Starting image optimization...');
    for (const image of images) {
        await optimizeImage(image);
    }
    console.log('✨ All images optimized! Now update your data.ts to use local paths.');
}

run();
