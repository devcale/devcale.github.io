import React from 'react'
import styling from "./ProjectMainComponent.module.css";


export const ProjectMainComponent = (props) => {

    let catList = props.categories === undefined?['N/A']:props.categories;
    let techList = props.technologies === undefined?['N/A']:props.technologies;
    let role = props.role === undefined?'Project Owner':props.role

    return (
        <div>
            <div className={styling.projectContainer+' '+styling[props.project+'-background-color']}>
                <div className={styling.centeredContainer}>
                    <div className={styling['project-img-container']}>
                        <div className={styling['project-img']+' '+styling[props.project+'-main']}>
                        </div>
                    </div>
                    <div className={styling['project-title']+' '+styling[props.project+'-color-main']}>
                        <h1>
                            {props.title}
                        </h1>
                        <div className={styling.titleSeparator+' '+styling[props.project+'-separator-color']}></div>
                    </div>

                    <div className={styling.datasheetContainer}>
                        <div className={styling.datasheetLeft}>
                            <table>
                               <tbody>
                               <tr>
                                    <td className={styling.tableTitle+' '+styling[props.project+'-color-main']}>TYPE</td>
                                    <td className={styling.tableContent}> 
                                        <ul className={styling.categoryList}>
                                            {catList.map((category) => {
                                                return <li>{category}</li>
                                            })}
                                            
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styling.tableTitle+' '+styling[props.project+'-color-main']}>TECH USED</td>
                                    <td className={styling.tableContent}> 
                                        <ul className={styling.categoryList}>
                                            {techList.map((technology) => {
                                                return <li>{technology}</li>
                                            })}
                                            
                                        </ul>
                                    </td>
                                </tr>
                                <tr>
                                    <td className={styling.tableTitle+' '+styling[props.project+'-color-main']}>ROLE</td>
                                    <td className={styling.tableContent}>{role}</td>
                                </tr>
                                <tr>
                                    <td className={styling.tableTitle+' '+styling[props.project+'-color-main']}>YEAR</td>
                                    <td className={styling.tableContent}>{props.year}</td>
                                </tr>
                               </tbody>
                            </table>
                            
                        </div>
                        <div className={styling.datasheetRight}>
                            <div className={styling.description}>
                                {props.description} <br/><br/> {props.additional} <br/><br/> {props.extra}
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>

    )
}
