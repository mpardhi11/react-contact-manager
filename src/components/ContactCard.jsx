import PropTypes from "prop-types";
import user from "../images/user.png";
import "./ContactCard.css";

const ContactCard = ({ contact, clickHandler }) => {
  return (
    <div className="ui celled list" style={{}}>
      <div className="item">
        <img className="ui avatar image" src={user} alt="user" />
        <div className="content">
          <div className="header">{contact?.name}</div>
          <div>{contact?.email}</div>
        </div>

        <i
          className="trash alternate outline icon"
          style={{ color: "red", marginTop: "7px" }}
          onClick={() => clickHandler(contact.guid)}
        ></i>
      </div>
    </div>
  );
};

ContactCard.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    guid: PropTypes.string,
  }).isRequired,
};

export default ContactCard;
