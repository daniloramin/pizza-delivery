import "./style.scss";

import { Link } from "react-router-dom";

import {
  BsFillTelephoneFill,
  BsFillChatFill,
  BsFillClockFill,
} from "react-icons/bs";
import { FiArrowLeft } from "react-icons/fi";
import { HiLocationMarker } from "react-icons/hi";

import { Title } from "../../components/Title";
import { SubInfo } from "../../components/SubInfo";
import { Evaluation } from "../../components/Evaluation";

export const TrackDelivery = () => {
  return (
    <div id="track-delivery">
      <Link className="back-button" to={-1}>
        <FiArrowLeft />
      </Link>

      <div className="tracker"></div>

      <div className="track-content">
        <span className="top-puller"></span>

        <div className="delivery-user">
          <div className="delivery-user-image"></div>

          <div className="delivery-user-info">
            <Title type="h2">Nash Ryder</Title>

            <SubInfo>Food Courier</SubInfo>

            <Evaluation value={4.9} />
          </div>

          <div className="delivery-contacts">
            <button>
              <BsFillTelephoneFill />
            </button>
            <button>
              <BsFillChatFill />
            </button>
          </div>
        </div>

        <div className="order-infos">
          <span className="top-puller"></span>

          <div className="delivery-location">
            <Title type="h2">Delivery Location</Title>

            <div className="address-info">
              <div>
                <HiLocationMarker />
              </div>

              <SubInfo>428 80th St NY, USA</SubInfo>
            </div>
          </div>

          <div className="arrive-in">
            <Title type="h2">Arrive In</Title>

            <div className="time-info">
              <div>
                <BsFillClockFill />
              </div>

              <SubInfo>30 min</SubInfo>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
