'use client'

import './Hero.css'

import Header from '../../layout/Header/Header'
import ButtonPink from '../../ui/ButtonPink/ButtonPink'
import Play from '../../assets/svg/play.svg'
import Bag from '../../assets/svg/bag.svg'
import { useEffect, useRef } from 'react'

export default function Hero() {
	const canvasRef = useRef(null)

	useEffect(() => {
		const canvas = canvasRef.current
		const ctx = canvas.getContext('2d')

		let width = (canvas.width = window.innerWidth)
		let height = (canvas.height = window.innerHeight)

		const centerX = width / 2
		const centerY = height / 2
		const gap = 3

		const getResponsiveSizes = () => {
			if (width < 640) {
				return { tileSize: 80, radius: 110 }
			} else if (width < 768) {
				return { tileSize: 90, radius: 120 }
			} else if (width < 1024) {
				return { tileSize: 120, radius: 160 }
			} else {
				return { tileSize: 150, radius: 200 }
			}
		}

		let { tileSize, radius } = getResponsiveSizes()

		const tiles = []

		for (let row = 0; row < 3; row++) {
			for (let col = 0; col < 3; col++) {
				const offsetX = (col - 1) * (tileSize + gap)
				const offsetY = (row - 1) * (tileSize + gap)
				const scaleY = 1

				tiles.push({
					x: centerX + offsetX,
					y: centerY + offsetY,
					size: tileSize,
					scaleY,
					angle: 0,
					isSide: false,
				})
			}
		}

		for (let i = 0; i < 3; i++) {
			tiles.push({
				x: centerX - (tileSize + gap) * 2,
				y: centerY + (i - 1) * (tileSize + gap),
				size: tileSize,
				scaleY: 1,
				angle: 0,
				isSide: true,
			})
		}

		for (let i = 0; i < 3; i++) {
			tiles.push({
				x: centerX + (tileSize + gap) * 2,
				y: centerY + (i - 1) * (tileSize + gap),
				size: tileSize,
				scaleY: 1,
				angle: 0,
				isSide: true,
			})
		}

		const drawTile = (ctx, x, y, size, scaleY, isSide) => {
			ctx.save()
			ctx.translate(x, y)
			ctx.scale(1, scaleY)

			const half = size / 2

			const grad = ctx.createLinearGradient(-half, -half, -half, half)
			grad.addColorStop(
				0,
				isSide ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.15)'
			)
			grad.addColorStop(
				1,
				isSide ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.07)'
			)

			ctx.fillStyle = grad

			ctx.shadowColor = 'rgba(0,0,0,0.15)'
			ctx.shadowBlur = 10
			ctx.shadowOffsetY = 4

			ctx.fillRect(-half, -half, size, size)

			ctx.restore()
		}

		const draw = () => {
			ctx.clearRect(0, 0, width, height)

			const gradient = ctx.createRadialGradient(
				centerX,
				centerY,
				0,
				centerX,
				centerY,
				radius
			)
			gradient.addColorStop(0, '#EB9AFF')
			gradient.addColorStop(0.4, 'rgba(235,154,255,0.7)')
			gradient.addColorStop(0.7, 'rgba(235,154,255,0.3)')
			gradient.addColorStop(1, 'rgba(235,154,255,0)')

			ctx.beginPath()
			ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
			ctx.fillStyle = gradient
			ctx.shadowColor = '#EB9AFF'
			ctx.shadowBlur = 100
			ctx.fill()
			ctx.shadowBlur = 0

			for (let tile of tiles) {
				drawTile(ctx, tile.x, tile.y, tile.size, tile.scaleY, tile.isSide)
			}

			requestAnimationFrame(draw)
		}

		draw()

		const handleResize = () => {
			width = canvas.width = window.innerWidth
			height = canvas.height = window.innerHeight
		}
		window.addEventListener('resize', handleResize)

		return () => window.removeEventListener('resize', handleResize)
	}, [])
	return (
		<div className='hero'>
			<Header />

			<canvas ref={canvasRef} className='heroCanvas' />

			<div className='heroInf'>
				<div className='heroTitle'>
					Invest in What’s Next Before the World Knows ↴
				</div>

				<div className='heroBottom'>
					<div className='heroTexts'>
						<div className='heroSubtitles'>
							<div className='heroSubtitle'>
								<Bag />
								Exclusive
							</div>
							<div className='heroSubtitle'>
								<Bag />
								Top Startups
							</div>
						</div>

						<div className='heroText'>
							Access the startups VCs fight over, the assets institutions chase,
							and the companies you were never meant to reach — all in one
							platform.
						</div>
					</div>
					<div className='heroButtons'>
						<ButtonPink extraClass='heroPinkBtn' />
						<button className='heroClearBtn'>
							<Play />
							Check your wallet
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}
