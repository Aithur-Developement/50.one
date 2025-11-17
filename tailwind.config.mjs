export default {
	darkMode: ['class'],
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				poppins: [
					'poppins'
				],
				montserrat: [
					'montserrat'
				],
				inter: [
					'Inter'
				],
				raleway: [
					'Raleway'
				],
			},
			boxShadow: {
				shadow01: '0 4px 4px 0 rgba(0,0,0,0.25)',
				shadow02: '0 127px 36px 0 rgba(0, 0, 0, 0.00), 0 82px 33px 0 rgba(0, 0, 0, 0.00), 0 46px 28px 0 rgba(0, 0, 0, 0.01), 0 20px 20px 0 rgba(0, 0, 0, 0.02), 0 5px 11px 0 rgba(0, 0, 0, 0.02)',
				shadow03: '0 2.021px 2.021px 0 rgba(0,0,0,0.25)',
			},
			backgroundImage: {
				blur_gradient: 'linear-gradient(127deg, rgba(0, 0, 0, 0.01) 9.33%, rgba(0, 0, 0, 0.01) 71.76%)',
				
				
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
		},
		screens: {
			mbl: {
				min: '0px',
				max: '768px'
			},
			mn: '430px',
			sm: '640px',
			md: '800px',
			lg: '1024px',
			xl: '1150px',
			mini: '1300px',
			'1xl': '1400px',
			middle: '1600px',
			'2xl': '1536px',
			'3xl': '1921px',
			'4xl': '2561px'
		}
	},
	plugins: [require("tailwindcss-animate")],
  }
  