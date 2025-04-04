import React from "react";
import Pagecomponent from "../../../PageHeader";
import { BsInfoCircleFill } from "react-icons/bs";
import { Line } from "rc-progress";
import { Animate, AnimateKeyframes } from "react-simple-animate";
import "./style.scss";
import { Background } from "@tsparticles/engine";

const Skills = () => {
    // Dynamic style (you can modify this as needed)
    const st = {
        color: "white", // Customize this based on your conditions
    };

    const skilldata = [
        {
            label: "Front End",
            data: [
                { SkillName: "HTML", percentage: "90%" },
                { SkillName: "CSS", percentage: "90%" },
                { SkillName: "JavaScript", percentage: "90%" },
            ],
        },
        {
            label: "Back End",
            data: [
                { SkillName: "Java", percentage: "80%" },
                { SkillName: "MySQL", percentage: "90%" },
            ],
        },
    ];

    // Validate if skilldata is non-empty and an array
    if (!Array.isArray(skilldata) || skilldata.length === 0) {
        return <p>No skills data available.</p>;
    }

    return (
        <section id="skills" className="skills">
            <Pagecomponent
                headerText="My Skills"
                icon={<BsInfoCircleFill size={40} />}
            />
            <div className="skills_content-wrapper">
                {skilldata.map((category, index) => (
                    <div
                        key={index}
                        className="skills_content-wrapper_inner-content"
                    >
                        <Animate
                            play={true}
                            duration={0.5}
                            delay={0.5}
                            start={{ opacity: 0 }}
                            end={{ opacity: 1 }}
                        >
                            <h3
                                style={st}
                                className="skills_content-wrapper_inner-content_category-text"
                            >
                                {category.label}
                            </h3>
                        </Animate>
                        <div>
                            {category.data.map((skillItem, j) => (
                                <AnimateKeyframes
                                    key={j}
                                    play
                                    duration={0.5}
                                    keyframes={[
                                        "transform: scale(0)",
                                        "transform: scale(1)",
                                    ]}
                                    iterationCount={1}
                                >
                                    <div className="progressbar-wrapper">
                                        <p className="skillnamepara">{skillItem.SkillName} -   {skillItem.percentage}
                                            
                                            </p> 
                                        <Line
                                            className="line"
                                            percent={skillItem.percentage.replace(
                                                "%",
                                                ""
                                            )}
                                            strokeWidth={9}
                                         
                                            strokeColor="var(--blue-theme-main-color)"
                                            trailColor="var(--blue-theme-text-color)"
                                            trailWidth={8}
                                         
                                            strokeLinecap="round"
                                            
                                        />
                                      
                                    </div>
                                </AnimateKeyframes>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Skills;
