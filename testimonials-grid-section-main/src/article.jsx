export default function Article (props) {
    return (
        <article className={"items "+ props.class}>
            <div className="personal-details">
                <img src={props.src} alt={props.alt}/>
                <div>
                <p>{props.person}</p>
                <p>{props.level}</p>
                </div>
            </div>
            <p className="summary">{props.testimonialSummary}</p>
            <p className="testimonial">{props.testimonial}</p>
        </article>
    )
} 