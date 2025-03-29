/* eslint-disable @typescript-eslint/no-require-imports */
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

export default {
	darkMode: ["class"],
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				background: '#f9fafb',
				foreground: '#111827',
				card: {
					DEFAULT: '#ffffff',
					foreground: '#1e293b',
				},
				popover: {
					DEFAULT: '#ffffff',
					foreground: '#1e293b',
				},
				primary: {
					DEFAULT: '#0ea5e9',
					foreground: '#ffffff',
				},
				secondary: {
					DEFAULT: '#e0f2fe',
					foreground: '#0369a1',
				},
				muted: {
					DEFAULT: '#f1f5f9',
					foreground: '#475569',
				},
				accent: {
					DEFAULT: '#dbeafe',
					foreground: '#1d4ed8',
				},
				destructive: {
					DEFAULT: '#dc2626',
					foreground: '#ffffff',
				},
				border: '#94a3b8',  // Darkened for better visibility
				input: '#94a3b8',   // Darkened for better visibility
				ring: '#38bdf8',
				chart: {
					'1': '#3b82f6', // More vibrant blue
					'2': '#10b981', // More vibrant green
					'3': '#f59e0b', // More vibrant yellow
					'4': '#ef4444', // More vibrant red
					'5': '#8b5cf6', // More vibrant purple
					'6': '#06b6d4', // Cyan
					'7': '#ec4899', // Pink
					'8': '#f97316', // Orange
					'9': '#6366f1', // Indigo
					'10': '#14b8a6', // Teal
				},
				sidebar: {
					DEFAULT: '#f0f9ff',
					foreground: '#0c4a6e',
					primary: '#0284c7',
					'primary-foreground': '#ffffff',
					accent: '#bae6fd',
					'accent-foreground': '#0369a1',
					border: '#bae6fd',
					ring: '#38bdf8',
				}
			},
			borderRadius: {
				lg: '0.75rem',
				md: '0.5rem',
				sm: '0.25rem'
			},
			borderWidth: {
				DEFAULT: '1.5px', // Increased default border width
				'0': '0',
				'2': '2px',
				'3': '3px',
				'4': '4px',
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				"loading": {
					"to": {
						transform: "rotate(360deg)"
					},
				},
				flip: {
					to: {
						transform: "rotate(360deg)",
					},
				},
				rotate: {
					to: {
						transform: "rotate(90deg)",
					},
				},
				orbit: {
					"0%": {
						transform:
							"rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))",
					},
					"100%": {
						transform:
							"rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))",
					},
				},
				ripple: {
					"0%, 100%": {
						transform: "translate(-50%, -50%) scale(1)",
					},
					"50%": {
						transform: "translate(-50%, -50%) scale(0.9)",
					},
				},
				blob: {
					"0%": {
						transform: "translate(-50%, -50%) rotate(0deg) scale(1)",
					},
					"33%": {
						transform: "translate(-50%, -50%) rotate(120deg) scale(1.1)",
					},
					"66%": {
						transform: "translate(-50%, -50%) rotate(240deg) scale(0.9)",
					},
					"100%": {
						transform: "translate(-50%, -50%) rotate(360deg) scale(1)",
					},
				},
				"image-glow": {
					"0%": {
						"opacity": "0",
						"animation-timing-function": "cubic-bezier(.74, .25, .76, 1)",
					},
					"10%": {
						"opacity": "0.5",
						"animation-timing-function": "cubic-bezier(.12, .01, .08, .99)",
					},
					"100%": {
						"opacity": "1",
					},
				},
				shimmer: {
					"100%": {
						transform: "translateX(100%)",
					},
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'loading': 'loading 0.6s linear infinite',
				flip: "flip 6s infinite steps(2, end)",
				rotate: "rotate 3s linear infinite both",
				orbit: "orbit calc(var(--duration)*1s) linear infinite",
				ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
				blob: "blob 7s infinite",
				"image-glow": "image-glow 6s ease-out 0.6s forwards",
				shimmer: "shimmer 2s infinite",
			},
			spacing: {
				"1/8": "12.5%",
			},
			fontFamily: {
				heading: ['var(--font-heading)', 'Inter', 'system-ui', 'sans-serif'],
				subheading: ['var(--font-subheading)', 'Inter', 'system-ui', 'sans-serif'],
				base: ['var(--font-base)', 'Inter', 'system-ui', 'sans-serif'],
			},
			boxShadow: {
				subtle: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
				'subtle-lg': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.05)',
				card: '0px 4px 8px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.08)', // Enhanced shadow
				'blue-glow': '0 0 15px rgba(56, 189, 248, 0.7)', // Stronger glow
				'chart-element': '0 4px 6px rgba(0, 0, 0, 0.1)', // Added for chart elements
				'chart-tooltip': '0 8px 16px rgba(0, 0, 0, 0.12), 0 2px 4px rgba(0, 0, 0, 0.08)', // Added for chart tooltips
				'premium-card': '0 10px 25px rgba(0, 0, 0, 0.12), 0 4px 10px rgba(0, 0, 0, 0.08)', // Added premium card shadow
			},
			transitionTimingFunction: {
				'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
				'bounce-in': 'cubic-bezier(0.68, -0.55, 0.27, 1.55)',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-subtle': 'linear-gradient(to right, #f0f9ff, #e0f7fa, #f0f9ff)',
				'blue-gradient': 'linear-gradient(125deg, #0ea5e9 0%, #38bdf8 50%, #7dd3fc 100%)',
				'chart-blue-gradient': 'linear-gradient(180deg, rgba(59, 130, 246, 0.2) 0%, rgba(59, 130, 246, 0.02) 100%)', // Added for chart styling
				'chart-green-gradient': 'linear-gradient(180deg, rgba(16, 185, 129, 0.2) 0%, rgba(16, 185, 129, 0.02) 100%)', // Added for chart styling
				'chart-yellow-gradient': 'linear-gradient(180deg, rgba(245, 158, 11, 0.2) 0%, rgba(245, 158, 11, 0.02) 100%)', // Added for chart styling
				'chart-red-gradient': 'linear-gradient(180deg, rgba(239, 68, 68, 0.2) 0%, rgba(239, 68, 68, 0.02) 100%)', // Added for chart styling
				'chart-purple-gradient': 'linear-gradient(180deg, rgba(139, 92, 246, 0.2) 0%, rgba(139, 92, 246, 0.02) 100%)', // Added for chart styling
			},
		}
	},
	plugins: [
		require("tailwindcss-animate"),
 		plugin(({ addComponents, theme }) => {
			addComponents({
				'.chart-container': {
					backgroundColor: 'white',
					borderRadius: theme('borderRadius.lg'),
					padding: theme('spacing.4'),
					border: `2px solid ${theme('colors.border')}`,
					boxShadow: theme('boxShadow.card'),
				},
				'.chart-tooltip': {
					backgroundColor: 'white',
					borderRadius: theme('borderRadius.md'),
					padding: theme('spacing.2'),
					border: `1.5px solid ${theme('colors.border')}`,
					boxShadow: theme('boxShadow.chart-tooltip'),
					fontWeight: '500',
				},
				'.chart-legend': {
					display: 'flex',
					flexWrap: 'wrap',
					gap: theme('spacing.2'),
					marginTop: theme('spacing.4'),
				},
				'.chart-legend-item': {
					display: 'flex',
					alignItems: 'center',
					gap: theme('spacing.2'),
				},
				'.chart-legend-color': {
					width: '12px',
					height: '12px',
					borderRadius: '50%',
					border: `1.5px solid ${theme('colors.border')}`,
				},
				'.chart-grid-line': {
					stroke: theme('colors.muted.DEFAULT'),
					strokeWidth: '1px',
					strokeDasharray: '4 4',
				},
				'.chart-axis-line': {
					stroke: theme('colors.border'),
					strokeWidth: '1.5px',
				},
				'.chart-data-point': {
					r: '4',
					strokeWidth: '2',
					transition: 'all 0.2s ease',
					'&:hover': {
						r: '6',
					},
				},
				'.chart-bar': {
					transition: 'opacity 0.2s ease',
					'&:hover': {
						opacity: '0.8',
					},
					strokeWidth: '1.5px',
					stroke: 'white',
				},
				// Premium UI components
				'.premium-card': {
					backgroundColor: 'white',
					borderRadius: theme('borderRadius.lg'),
					padding: theme('spacing.6'),
					border: `2px solid ${theme('colors.border')}`,
					boxShadow: theme('boxShadow.premium-card'),
					transition: 'transform 0.3s ease, box-shadow 0.3s ease',
					'&:hover': {
						transform: 'translateY(-2px)',
						boxShadow: '0 14px 30px rgba(0, 0, 0, 0.15), 0 4px 12px rgba(0, 0, 0, 0.10)',
					},
				},
				'.premium-input': {
					borderWidth: '1.5px',
					borderColor: theme('colors.input'),
					borderRadius: theme('borderRadius.md'),
					padding: `${theme('spacing.2')} ${theme('spacing.3')}`,
					transition: 'all 0.2s ease',
					'&:focus': {
						boxShadow: theme('boxShadow.blue-glow'),
						borderColor: theme('colors.ring'),
					},
				},
				'.premium-button': {
					padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
					borderRadius: theme('borderRadius.md'),
					fontWeight: '500',
					transition: 'all 0.2s ease',
					border: `1.5px solid transparent`,
					'&:focus': {
						boxShadow: theme('boxShadow.blue-glow'),
					},
				},
				'.sidebar-item': {
					borderLeft: `3px solid transparent`,
					padding: `${theme('spacing.2')} ${theme('spacing.3')}`,
					borderRadius: theme('borderRadius.md'),
					transition: 'all 0.2s ease',
					'&.active': {
						borderLeftColor: theme('colors.sidebar.primary'),
						backgroundColor: theme('colors.sidebar.accent'),
					},
					'&:hover:not(.active)': {
						backgroundColor: 'rgba(186, 230, 253, 0.4)',
					},
				},
			});
		}),
	],
} satisfies Config;