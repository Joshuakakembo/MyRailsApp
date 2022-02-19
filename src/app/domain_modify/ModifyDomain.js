import Registrant from "./modify.contacts.registrant";
import Admin from "./modify.contacts.admin";
import Billing from "./modify.contacts.billing";
import Tech from "./modify.contacts.tech";
import NameServers from "./modify.contacts.nameServers";
export default function ModifyDomain() {
  return (
    <div>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <Registrant />
            </div>
            <div class="carousel-item">
              <Admin />
            </div>
            <div class="carousel-item">
              <Billing />
            </div>
            <div class="carousel-item">
              <Tech />
            </div>
            <div class="carousel-item">
              <NameServers />
            </div>
          </div>
          <a
            class="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a
            class="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      {/* <Registrant />
      <Admin />
      <Billing />
      <Tech />
      <NameServers /> */}
    </div>
  );
}
