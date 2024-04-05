
import style from './style.module.css'
const NextQuesitonButton = ({child,onClick}) => {
  return (
    <div className={style.container}>
    <div className={style.center}>
      <button className={style.btn} onClick={onClick}>
        <span>{child}</span>
      </button>
    </div>
  </div>
  )
}

export default NextQuesitonButton