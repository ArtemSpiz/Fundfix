import './ButtonPink.css'
import Arrow from '../../assets/svg/arrow.svg'

export default function ButtonPink({
	text = 'Check your wallet',
	extraClass = '',
	icon,
}) {
	return (
		<button className={`ButtonPink ${extraClass}`}>
			{text} {icon === false ? null : icon || <Arrow />}
		</button>
	)
}
