import { Col } from "react-bootstrap";
import { NavLink } from 'react-router-dom';


export const ProjectCard = ({ title, description, imgUrl ,navURL}) => {
  return (
    <Col size={12} sm={6} md={4}>

      <div className="proj-imgbx">
        <NavLink to={navURL} className="proj-imgbx">
        <img src={imgUrl} />
        </NavLink>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
