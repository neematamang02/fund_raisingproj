import React from "react";
import campaign1 from "../assets/images/abc.jpeg";
import campaign2 from "../assets/images/abc.jpeg";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  ProgressBar,
} from "react-bootstrap";
const campaigns = [
  {
    id: 1,
    title: "Clean Water for All",
    image: campaign1,
    target: 5000,
    raised: 3200,
  },
  {
    id: 2,
    title: "Education for Children",
    image: campaign2,
    target: 8000,
    raised: 4500,
  },
];
const Home = () => {
  return (
    <>
      <Container
        fluid
        className="py-5 text-white"
        style={{ backgroundColor: "#007bff" }}
      >
        <Container>
          <Row className="align-items-center">
            <Col
              xs={12}
              md={7}
              className="text-center text-md-start mb-4 mb-md-0"
            >
              <h1 className="display-4">Join Us in Making a Difference</h1>
              <p className="lead">
                Support impactful campaigns and help communities thrive. Your
                contribution matters.
              </p>
              <Button variant="light" size="lg" href="/donate">
                Start Donating
              </Button>
            </Col>
            <Col xs={12} md={5} className="text-center">
              <img
                src="https://media.licdn.com/dms/image/v2/D4E12AQGNN73pZXQnww/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1695241576788?e=2147483647&v=beta&t=ux4pkyf_ajwxwnapUrBzuJOCPN-MORfp10I308eUOL4"
                alt="Fundraising Hero"
                className="img-fluid rounded"
                style={{ maxHeight: "300px", objectFit: "cover" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Campaign Listings */}
      <Container className="py-5">
        <h2 className="text-center mb-4">Ongoing Campaigns</h2>
        <Row className="gy-4">
          {campaigns.map((campaign) => {
            const percent = Math.min(
              100,
              Math.round((campaign.raised / campaign.target) * 100)
            );
            return (
              <Col xs={12} md={6} lg={4} key={campaign.id}>
                <Card className="h-100">
                  <Card.Img
                    variant="top"
                    src={campaign.image}
                    alt={campaign.title}
                    className="img-fluid"
                    style={{ height: "200px", objectFit: "cover" }}
                  />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{campaign.title}</Card.Title>
                    <ProgressBar
                      now={percent}
                      label={`${percent}%`}
                      className="my-2"
                    />
                    <div className="mb-3">
                      <small>
                        Raised: ${campaign.raised.toLocaleString()} of $
                        {campaign.target.toLocaleString()}
                      </small>
                    </div>
                    <Button
                      href="/donate"
                      variant="primary"
                      className="mt-auto"
                    >
                      Donate
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
};

export default Home;
