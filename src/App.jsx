/*
 * Table of contents
 * 1. Project assets
 * 2. Reusable gallery pieces
 * 3. Portfolio page
 */
import { useState } from 'react'
import './App.css'

import magCover from './assets/SeniorMag/mag.jpg'
import mag2 from './assets/SeniorMag/mag2.jpg'
import mag3 from './assets/SeniorMag/mag3.jpg'
import mag4 from './assets/SeniorMag/mag4.jpg'
import mag5 from './assets/SeniorMag/mag5.jpg'
import mag6 from './assets/SeniorMag/mag6.jpg'
import mag7 from './assets/SeniorMag/mag7.jpg'
import mag8 from './assets/SeniorMag/mag8.jpg'
import mag9 from './assets/SeniorMag/mag9.jpg'
import mag10 from './assets/SeniorMag/mag10.jpg'
import mag11 from './assets/SeniorMag/mag11.jpg'
import mag12 from './assets/SeniorMag/mag12.jpg'
import mag13 from './assets/SeniorMag/mag13.jpg'
import yearbook1 from './assets/Yearbook/Yearbook_Portfolio.jpg'
import yearbook2 from './assets/Yearbook/Yearbook_Portfolio2.jpg'
import canWord from './assets/Sputnik/Can Mockup word.png'
import canMockup from './assets/Sputnik/Can Mockup.png'
import packaging from './assets/Sputnik/Packaging Flat Lay.png'
import type1 from './assets/type Studies/type.png'
import type2 from './assets/type Studies/type2.png'
import type3 from './assets/type Studies/type3.png'
import brooke from './assets/type Studies/brooke.jpg'

const magazineImages = [magCover, mag2, mag3, mag4, mag5, mag6, mag7, mag8, mag9, mag10, mag13]

function ProjectIntro({ number, title }) {
	return (
		<div className="project-intro">
			<p className="project-number">{number}</p>
			<h2>{title}</h2>
			<div className="project-notes" aria-label={`Notes for ${title}`} />
		</div>
	)
}

function Section({ id, number, title, children, className = '' }) {
	return (
		<section id={id} className={`project ${className}`}>
			<ProjectIntro number={number} title={title} />
			<div className="project-work">{children}</div>
		</section>
	)
}

function MagazineSlideshow() {
	const [activeImage, setActiveImage] = useState(0)
	const nextImage = () => setActiveImage((current) => (current + 1) % magazineImages.length)
	const previousImage = () => setActiveImage((current) => (current - 1 + magazineImages.length) % magazineImages.length)

	return (
		<div className="magazine-work">
			<div className="slideshow">
				<button type="button" className="slide-arrow" onClick={previousImage} aria-label="Previous magazine image">&#8592;</button>
				<img src={magazineImages[activeImage]} alt={`Senior Magazine page ${activeImage + 1}`} />
				<button type="button" className="slide-arrow" onClick={nextImage} aria-label="Next magazine image">&#8594;</button>
			</div>
			<p className="slide-count">{String(activeImage + 1).padStart(2, '0')} / {String(magazineImages.length).padStart(2, '0')}</p>
			<div className="magazine-details">
				<img src={mag11} alt="Senior Magazine spread 11" />
				<img src={mag12} alt="Senior Magazine spread 12" />
			</div>
		</div>
	)
}

function App() {
	const projects = [
		['magazine', '01', 'Senior Magazine'],
		['yearbook', '02', 'Yearbook 2025'],
		['sputnik', '03', 'Sputnik Branding'],
		['type-studies', '04', 'Type Studies'],
	]

	return (
		<main>
			<header className="landing">
				<h1>Grace Bishara</h1>
				<nav className="project-nav" aria-label="Projects">
					{projects.map(([id, number, title]) => (
						<a href={`#${id}`} key={id}><span>{number}</span>{title}</a>
					))}
				</nav>
				<a className="contact" href="mailto:gbishara@usc.edu">Contact: gbishara@usc.edu</a>
			</header>

			<Section id="magazine" number="01" title="Senior Magazine"><MagazineSlideshow /></Section>
			<Section id="yearbook" number="02" title="Yearbook 2025">
				<div className="yearbook-work"><img src={yearbook1} alt="Yearbook 2025 spread one" /><img src={yearbook2} alt="Yearbook 2025 spread two" /></div>
			</Section>
			<Section id="sputnik" number="03" title="Sputnik Branding">
				<div className="sputnik-work">
					<img className="sputnik-wide" src={canWord} alt="Sputnik word can mockup" />
					<img src={canMockup} alt="Sputnik can mockup" /><img className="hi" src={packaging} alt="Sputnik packaging flat lay" />
				</div>
			</Section>
			<Section id="type-studies" number="04" title="Type Studies">
				<div className="type-work"><img src={type1} alt="Type study one" /><img src={type2} alt="Type study two" /><img src={type3} alt="Type study three" /><img className="brooke" src={brooke} alt="Brooke type study" /></div>
			</Section>
		</main>
	)
}

export default App
