import React from "react";
import { useStyles } from "./ExperienceCard.styles";

export default function ExperienceCard({ title, date, desc, img }) {
    const classes = useStyles();

    return (
        <div className={classes.cardContainer}>
            <div className={classes.overlayContent}>
                <h4>{title}</h4>
                <p>{date}</p>
                <p>{desc}</p>
            </div>
            <div>
                <img className={classes.expImg} src={img} alt={title} />
            </div>
        </div>
    );
}
