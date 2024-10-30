/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
    	extend: {
    		fontFamily: {
    			inter: ["Inter", "cursive"],
    			DMSans: ["DMSans", "cursive"]
    		},
    		colors: {
    			primary: '#242424',
    			secondary: '#626262',
    			btn: '#F2B53C'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		},
    		keyframes: {
    			marquee: {
    				from: {
    					transform: 'translateX(0)'
    				},
    				to: {
    					transform: 'translateX(calc(-100% - var(--gap)))'
    				}
    			},
    			'marquee-vertical': {
    				from: {
    					transform: 'translateY(0)'
    				},
    				to: {
    					transform: 'translateY(calc(-100% - var(--gap)))'
    				}
    			},
    			shine: {
    				'0%': {
    					'background-position': '0% 0%'
    				},
    				'50%': {
    					'background-position': '100% 100%'
    				},
    				to: {
    					'background-position': '0% 0%'
    				}
    			}
    		},
    		animation: {
    			marquee: 'marquee var(--duration) infinite linear',
    			'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
    			shine: 'shine var(--duration) infinite linear'
    		}
    	}
    },
    plugins: [require("tailwindcss-animate")],
};
