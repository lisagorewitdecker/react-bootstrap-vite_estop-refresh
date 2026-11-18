import React from 'react';

// 1. Define TypeScript Interfaces
export interface Review {
	id: number;
	author: string;
	rating: number;
	text: string;
}
export interface GoogleReviewsAIProps {
	reviews?: Review[];
	rating?: string;
	totalReviews?: number;
	businessUrl?: string;
}
// 2. eStop Driving School Real Review Data
const ESTOP_REVIEWS: Review[] = [
	{
		id: 1,
		author: 'Coco',
		rating: 5,
		text: 'He is kind and patient instructor that my girls is now confident drivers.',
	},
	{
		id: 2,
		author: 'Keith Parker',
		rating: 5,
		text: 'She enjoyed the trainings and has recommended to her friends.',
	},
	{
		id: 3,
		author: 'tsedal netserab',
		rating: 5,
		text: 'Tony is the best instructor ever, he build my confidence in the first day.',
	},
];

// Replace this with
// your exact "Ask for reviews" short link from your Google Business Profile
const DEFAULT_REVIEW_URL = 'https://g.page/r/CbeCdHhgkAWvEAE/review';

export default function GoogleReviewsAI({
	                                        reviews = ESTOP_REVIEWS,
	                                        rating = '5.0',
	                                        totalReviews = 13, // Update this as your review count grows
	                                        businessUrl = DEFAULT_REVIEW_URL,
                                        }: GoogleReviewsAIProps) {
	return (
		<section style={styles.section} aria-labelledby="reviews-heading">
			<div style={styles.header}>
				<div>
					<span style={styles.eyebrow}>STUDENT TESTIMONIALS</span>
					<h2 id="reviews-heading" style={styles.heading}>
						TRUSTED BY MARIN & SONOMA COUNTY, SAN FRANCISCO & BAY AREA DRIVERS
					</h2>
					<div style={styles.ratingRow}>
            <span style={styles.stars} aria-label={`${rating} out of 5 stars`}>
              ★★★★★
            </span>
						<strong style={styles.score}>{rating}</strong>
						<span style={styles.count}>
                        Based on {totalReviews} Google reviews
            </span>
					</div>
				</div>
				<a
					href={businessUrl}
					target="_blank"
					rel="noopener noreferrer"
					style={styles.ctaButton}
					aria-label="Leave a review for eStop Driving School on Google"
				>
					Leave a Review
				</a>
			</div>
			
			{/* AI Summary Highlight Box */}
			<div style={styles.aiBox}>
				<div style={styles.aiHeader}>
					<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="url(#ai-gradient)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
						<defs>
							<linearGradient id="ai-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
								<stop offset="0%" stopColor="#3b82f6" />
								<stop offset="100%" stopColor="#8b5cf6" />
							</linearGradient>
						</defs>
						<path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
					</svg>
					<span style={styles.aiTitle}>Google AI Review Insights</span>
				</div>
				<p style={styles.aiText}>
					Students and parents consistently highlight <strong>Tony's patience</strong> and calm demeanor during lessons. Reviewers frequently mention his ability to quickly <strong>build confidence</strong> in nervous beginners, ensuring teens become safe, road-ready drivers from their very first day behind the wheel.
				</p>
			</div>
			
			{/* Individual Review Cards */}
			<div style={styles.grid}>
				{reviews.map((review) => (
					<article key={review.id} style={styles.card}>
						<div style={styles.cardTop}>
              <span style={styles.stars} aria-label={`${review.rating} stars`}>
                {'★'.repeat(review.rating)}
              </span>
							<span style={styles.googleBadge}>Google</span>
						</div>
						<p style={styles.quote}>"{review.text}"</p>
						<footer style={styles.author}>— {review.author}</footer>
					</article>
				))}
			</div>
		</section>
	);
}

// 3. Strongly Typed CSS in JS (Matching eStop Brand Identity)
const styles: Record<string, React.CSSProperties> = {
	section: {
		maxWidth: '100%',
		margin: '48px auto',
		padding: '0 20px',
		fontFamily: 'system-ui, -apple-system, sans-serif',
	},
	header: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-between',
		alignItems: 'flex-end',
		gap: '20px',
		marginBottom: '24px',
	},
	eyebrow: {
		display: 'block',
		fontSize: '12px',
		fontWeight: 700,
		letterSpacing: '0.08em',
		color: '#dc2626', // eStop Brand Red
		marginBottom: '6px',
		textTransform: 'uppercase',
	},
	heading: {
		margin: '0 0 8px',
		fontSize: '28px',
		fontWeight: 800,
		color: '#212529',
	},
	ratingRow: {
		display: 'flex',
		alignItems: 'center',
		gap: '8px',
		fontSize: '15px',
		color: '#9ca3af',
	},
	stars: {
		color: '#f59e0b',
		fontSize: '18px',
		letterSpacing: '1px',
	},
	score: {
		color: '#f9fafb',
		fontSize: '16px',
	},
	count: {
		color: '#9ca3af',
	},
	ctaButton: {
		backgroundColor: '#dc2626', // eStop Brand Red
		color: '#ffffff',
		textDecoration: 'none',
		padding: '10px 20px',
		borderRadius: '6px',
		fontWeight: 600,
		fontSize: '14px',
		transition: 'background 0.2s',
		cursor: 'pointer',
	},
	aiBox: {
		background: 'linear-gradient(145deg, rgba(59, 130, 246, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%)',
		border: '1px solid rgba(139, 92, 246, 0.2)',
		borderRadius: '12px',
		padding: '20px',
		marginBottom: '32px',
		color: '#212529'
	},
	aiHeader: {
		display: 'flex',
		alignItems: 'center',
		gap: '8px',
		marginBottom: '8px',
	},
	aiTitle: {
		fontWeight: 700,
		fontSize: '14px',
		background: '-webkit-linear-gradient(45deg, #3b82f6, #8b5cf6)',
		WebkitBackgroundClip: 'text',
		WebkitTextFillColor: 'transparent',
	},
	aiText: {
		margin: 0,
		fontSize: '15px',
		lineHeight: 1.6,
		color: '#212529',
	},
	grid: {
		display: 'grid',
		gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
		gap: '20px',
	},
	card: {
		backgroundColor: '#1f2937',
		color: '#fff',
		borderRadius: '12px',
		padding: '24px',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'space-between',
		border: '1px solid #374151',
	},
	cardTop: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: '14px',
	},
	googleBadge: {
		fontSize: '12px',
		fontWeight: 600,
		color: '#9ca3af',
		backgroundColor: 'rgba(255, 255, 255, 0.1)',
		padding: '3px 8px',
		borderRadius: '4px',
	},
	quote: {
		margin: '0 0 18px',
		fontSize: '15px',
		lineHeight: 1.6,
		fontStyle: 'italic',
		color: '#d1d5db',
	},
	author: {
		fontSize: '14px',
		fontWeight: 700,
		color: '#fbbf24',
		textAlign: 'right',
	},
};



