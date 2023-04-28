import viteImagemin from "vite-plugin-imagemin";
import { defineConfig } from "vite";

export default defineConfig({
	root: "./src",
	plugins: [
		viteImagemin({
			gifsicle: {
				optimizationLevel: 7,
				interlaced: false,
				mozjpeg: {
					quality: 80,
				},
				pngquant: {
					quality: [0.8, 0.9],
					speed: 4,
				},
				webp: {
					quality: 75,
				},
			},
		}),
	],
	build: {
		outDir: "../prod",
		minify: "esbuild",
		sourcemap: true,
		rollupOptions: {
			output: {
				entryFileNames: "[name]-[hash].js",
				assetFileNames: "[name]-[hash][extname]",
				chunkFileNames: "[name]-[hash].js",
				sourcemap: true,
			},
		},
	},
});
