import { Col } from "react-bootstrap";
import { NavLink } from 'react-router-dom';


export const ProjectCard = ({ title, description, imgUrl, navURL,onClick }) => {
  return (
    <Col md={12} onClick={onClick}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt="" />
          <div className="proj-txtx">
            <h3>{title}</h3>
            <span>{description}</span>
          </div>
        </div>
    </Col>
  )
}
