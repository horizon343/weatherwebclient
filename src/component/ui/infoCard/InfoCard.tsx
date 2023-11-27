import style from "./InfoCard.module.scss"

type TProps = {
    title: string
    text: string
    icon: React.ReactNode
}

export default function InfoCard({ title, text, icon }: TProps) {
    return (
        <div className={style.wrapper}>
            <p className={style.title}>{title}</p>
            <div className={style.box}>
                {icon}
                <p className={style.text}>{text}</p>
            </div>
        </div>
    )
}
