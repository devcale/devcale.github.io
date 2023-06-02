import React from "react";
import styling from "./CarcassonnePage.module.css";
import { ProjectMainComponent } from "../../../components/ProjectMain/ProjectMainComponent";
import landingImg from "../../../assets/img/projects/carcassonne/carcassonne-menu.png";
import selectImg from "../../../assets/img/projects/carcassonne/a2selectmode.png";
import gameplay1Img from "../../../assets/img/projects/carcassonne/gameplay1.png";
import gameplay2Img from "../../../assets/img/projects/carcassonne/gameplay2.png";
import gameoverImg from "../../../assets/img/projects/carcassonne/gameover.png";
import howtoImg from "../../../assets/img/projects/carcassonne/howto.png";
import boardsImg from "../../../assets/img/projects/carcassonne/boards.png";
import leaderboardArchImg from "../../../assets/img/projects/carcassonne/leaderboardmern.png";

export const CarcassonnePage = () => {
    return (
        <div>
            <ProjectMainComponent
                title="CARCASSONNE CHALLENGE"
                project="carcassonne"
                categories={["Web Application", "Game Development", "State Management"]}
                technologies={["ReactJS", "TypeScript", "MERN Stack", "Mongoose"]}
                year="2023"
                role="Candidate"
                description="This project was developed as the Technical Evaluation in the selection process for the Software Developer position at Adidas. This is a single player variation of the popular board game Carcassonne, in which the player will try to score as much points as he can, and compare their highest scores to other players highscores.🛠️ Built with Vite, ReactJS and TypeScript."
            />

            <div className={styling.gallerySection}>
                <div className={styling.pageSection}>
                    <h4 className={styling.pageName}>HOMEPAGE</h4>
                    <div className={styling.pageImgContainer}>
                        <img className={`${styling.pageImg}`} src={landingImg} alt="" />
                    </div>
                </div>
                <div className={styling.pageSection}>
                    <h4 className={styling.pageName}>HOW TO PLAY</h4>
                    <div className={styling.pageContentVert}>
                        <div className={styling.pageSmallImgContainer}>
                            <img className={`${styling.pageImgMed}`} src={howtoImg} alt="" />
                        </div>
                        <div className={styling.pageDescriptionMed}>
                        Unlock the secrets of the Carcassonne Challenge with the intuitive and informative "How to Play" screen. Designed to guide both new and seasoned players, this dedicated section provides a comprehensive overview of the game's rules and mechanics. <br /><br /> With clear visuals and concise explanations, the "How to Play" screen ensures that you quickly grasp the fundamentals and embark on your gaming journey with a solid foundation.
                        </div>
                    </div>
                </div>
                <div className={styling.pageSection}>
                    <h4 className={styling.pageName}>SELECT MODE PAGE</h4>
                    <div className={styling.pageImgContainer}>
                        <img className={`${styling.pageImg}`} src={selectImg} alt="" />
                    </div>
                </div>
                <div className={styling.pageSection}>
                    <h4 className={styling.pageName}>
                        DIFFERENT BOARD TYPES (12 OPTIONS)
                    </h4>
                    <div className={styling.pageContentVert}>
                        <div className={styling.pageSmallImgContainer}>
                            <img className={`${styling.pageImgMed}`} src={boardsImg} alt="" />
                        </div>
                        <div className={styling.pageDescriptionMed}>
                        By incorporating three different board sizes, Carcassonne Challenge allows for further customization and gameplay variety. Take on the small board for quick and intense matches, dive into the medium-sized board for a balanced experience, or immerse yourself in the sprawling landscapes of the large board for an epic adventure. <br/><br/> The combination of game modes and board sizes opens up a world of possibilities, giving you the freedom to tailor your gaming experience to your preferences. Challenge yourself with the classic mode on the large board for a strategic masterpiece, or opt for the road rally mode on the large board to test your strategy and decision-making under pressure. With 12 distinct gameplay combinations, Carcassonne Challenge ensures that no two games are ever alike.
                        </div>
                    </div>
                    
                </div>
                <div className={styling.pageSection}>
                    <h4 className={styling.pageName}>SMALL BOARD CLASSIC GAMEMODE</h4>
                    <div className={styling.pageImgContainer}>
                        <img className={`${styling.pageImg}`} src={gameplay1Img} alt="" />
                    </div>
                </div>
                <div className={styling.pageSection}>
                    <h4 className={styling.pageName}>
                        CLASSIC BOARD CITY CRAZE GAMEMODE
                    </h4>
                    <div className={styling.pageImgContainer}>
                        <img className={`${styling.pageImg}`} src={gameplay2Img} alt="" />
                    </div>
                </div>
                <div className={styling.pageSection}>
                    <h4 className={styling.pageName}>GAME OVER SCREEN</h4>
                    <div className={styling.pageImgContainer}>
                        <img className={`${styling.pageImg}`} src={gameoverImg} alt="" />
                    </div>
                </div>
                
                
                <div className={styling.pageSection}>
                    <h4 className={styling.pageName}>
                        BEHIND THE LEADERBOARD
                    </h4>
                    <div className={styling.pageContent}>
                        <div className={styling.pageSmallImgContainer}>
                            <img className={`${styling.pageSmallImg}`} src={leaderboardArchImg} alt="" />
                        </div>
                        <div className={styling.pageDescription}>
                            One of the highlights of this project is the implementation of a dynamic leaderboard using the MERN stack. The leaderboard adds an exciting competitive element to the game, allowing players to showcase their skills and strive for the highest scores possible. <br /><br /> Utilizing the power of the MERN stack (MongoDB, Express.js, React.js, and Node.js), the leaderboard seamlessly captures and displays the top performers in real-time. Through robust backend functionalities, player scores are persistently stored and updated, ensuring accurate and up-to-date rankings.
                        </div>
                    </div>

                </div>

                
            </div>
        </div>
    );
};
