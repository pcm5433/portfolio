import { motion } from "framer-motion";
import './skill.css';

function SkillList() {
  return (
    <article className="w1440 skill_wrap">
        <div className="skill_list">
            <motion.svg
                className="loader"
                height="24"
                viewBox="0 0 50 50"
                width="24"
                transition={{ ease: "linear", duration: 4 }}
                style={{ originX: "center", originY: "center" }}
            >
                <motion.circle
                    cx="25"
                    cy="25"
                    fill="none"
                    r="20"
                    stroke="var(--color-main)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    animate={{
                        strokeDasharray: ["50"],
                        // strokeDasharray: ["1, 150", "90, 150", "90, 150"],
                        strokeDashoffset: [-90]
                    }}
                    transition={{ ease: "easeInOut", duration: 2 }}
                >
                    <img src="" alt="" />
                </motion.circle>
            </motion.svg>
        </div>
    </article>
  );
}

export default SkillList;