/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // ใช้ static export
  images: {
    unoptimized: true, // ปิด Image Optimization เพื่อรองรับ static export
  },
};

module.exports = nextConfig;
