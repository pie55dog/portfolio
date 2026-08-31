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
import threadsCover from './assets/threads/cover.jpg'
import threadsVertical from './assets/threads/vertical.jpg'
import threads07 from './assets/threads/objectss.png'
import threadsSeniors from './assets/threads/seniors.png'
import threadsOpening from './assets/threads/opening.png'
import threadsTeams from './assets/threads/teams.png'
import threadsNormal from './assets/threads/normalgrace.png'
import canWord from './assets/Sputnik/Can Mockup word.png'
import canMockup from './assets/Sputnik/Can Mockup.png'
import packaging from './assets/Sputnik/Packaging Flat Lay.png'
import type1 from './assets/type Studies/type.png'
import type2 from './assets/type Studies/type2.png'
import type3 from './assets/type Studies/type3.png'
import brooke from './assets/type Studies/brooke.jpg'

const magazineImages = [magCover, mag2, mag3, mag4, mag5, mag6, mag7, mag8, mag9, mag10, mag11, mag12, mag13]

function ProjectIntro({ number, title, blurb }) {
	return (
		<div className="project-intro">
			<p className="project-number">{number}</p>
			<h2>{title}</h2>
			<p className="project-blurb">{blurb}</p>
			<div className="project-notes" aria-label={`Notes for ${title}`} />
		</div>
	)
}

function Section({ id, number, title, blurb, children, className = '' }) {
	return (
		<section id={id} className={`project ${className}`}>
			<ProjectIntro number={number} title={title} blurb={blurb} />
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

function ThreadsGallery() {
	return (
		<div className="threads-work">
			<img className="threads-cover" src={threadsCover} alt="Yearbook 2026 cover" />
			<img className="threads-vertical" src={threadsVertical} alt="Yearbook 2026 vertical spread" />
			<img className="threads-teams" src={threadsTeams} alt="Yearbook 2026 teams spread" />
			<img className="threads-normal" src={threadsNormal} alt="Yearbook 2026 normal spread" />
			<img className="threads-07" src={threads07} alt="Yearbook 2026 page 07" />
			
			<img className="threads-opening" src={threadsOpening} alt="Yearbook 2026 opening spread" />
			
		</div>
	)
}

function App() {
	const projects = [
		['magazine', '01', 'Senior Magazine'],
		['yearbook-2026', '02', 'Yearbook 2026'],
		['yearbook', '03', 'Yearbook 2025'],
		
		['type-studies', '04', 'Type Studies'],
		['sputnik', '05', 'Sputnik Branding'],
	]

	return (
		<main>
			<header className="landing">
				<h1 className="landing-title">Grace Bishara</h1>
				<nav className="project-nav" aria-label="Projects">
					{projects.map(([id, number, title]) => (
						<a href={`#${id}`} key={id}><span>{number}</span>{title}</a>
					))}
				</nav>
				<a className="contact" href="mailto:gbishara@usc.edu">Contact: gbishara@usc.edu</a>
			</header>

			<Section id="magazine" number="01" title="Senior Magazine" blurb={'Each year, the seniors in the yearbook class create a magazine honoring the graduating class. I designed, oversaw, and produced the 2026 edition, “Roll Credits.” '}><MagazineSlideshow /></Section>
			<Section id="yearbook-2026" number="02" title="Yearbook 2026" blurb={"An overview of my 2026 high school yearbook, “the threads between us.” I served as Co-Editor-In-Chief and design lead. When creating this book, we explored mixing typefaces and used lots of lines, ultimately amplifying a theme of connections between the people in our school community. All of the spreads here and the cover were designed by me.\n\nAll of my yearbook work is done in InDesign."}>
				<ThreadsGallery />
			</Section>
			<Section id="yearbook" number="03" title="Yearbook 2025" blurb={'A project overview and style guide from my 11th grade yearbook.\n\nIn junior year, I was one of three Editors-in-Chief and design lead. The theme (which includes the colors, fonts, vibe, etc) was a team effort, but I was its primary creator and I designed most elements on the style guide, including the folio, motifs, colors, and typography style. I also created the cover.\n\nAll of my yearbook work is done in InDesign.'}>
				<div className="yearbook-work"><img src={yearbook1} alt="Yearbook 2025 spread one" /><img src={yearbook2} alt="Yearbook 2025 spread two" /></div>
			</Section>
			<Section id="type-studies" number="04" title="Type Studies" blurb={'Various projects with typography.\n\nIn my spare time, I like playing around with type by making posters. The first three are brief type studies, and the “Brooke” poster is a typographic portrait of my mom.'}>
				<div className="type-work"><img src={type1} alt="Type study one" /><img src={type2} alt="Type study two" /><img src={type3} alt="Type study three" /><img className="brooke" src={brooke} alt="Brooke type study" /></div>
			</Section>
			<Section id="sputnik" number="05" title="Sputnik Branding" blurb={'A passion project exploring branding and packaging design.\n\nSputnik Tennis Balls came from two brief moments of inspiration. I was first inspired by the bold, eye-catching design of vintage tennis ball containers, which feature contrasting typography, fun graphics, and a playfulness that has been lost in modern sports marketing. Completely separately, I was struck by the shape of the Soviet Union’s Sputnik 1 satellite. I used an image of it as a reference when designing the flying tennis ball on the can (the tennis ball serves the satellite body while the white lines serve as the satellite legs), which I think brings the whole concept together.\n\nI created the vector art in Adobe Illustrator, and I created the mockup in Womp 3D and Adobe Photoshop. '}>
				<div className="sputnik-work">
					<img className="sputnik-wide" src={canWord} alt="Sputnik word can mockup" />
					<img src={canMockup} alt="Sputnik can mockup" /><img className="hi" src={packaging} alt="Sputnik packaging flat lay" />
				</div>
			</Section>
		</main>
	)
}

export default App
