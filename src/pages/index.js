import Layout from "@components/Layout";
import Section from "@components/Section";
import Container from "@components/Container";
import Map from "@components/Map";
import RouteList from "@components/List/RouteList";
import styles from "@styles/Home.module.scss";
import { useSelector } from "react-redux";

const DEFAULT_CENTER = [59.84660399, 30.29496392];

export default function Home() {
  const coords = useSelector((state) => state.coords.value);
  return (
    <Layout>
      <Section>
        <Container className={styles.homeContainer}>
          <RouteList />
          <Container className={styles.homeMap}>
            <Map width="800" height="400" center={DEFAULT_CENTER} zoom={12}>
              {({ TileLayer, Marker, Popup, Polyline }) => (
                <>
                  <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                  />
                  {coords && coords.length && (
                    <Marker position={coords[0]}>
                      <Popup>Route Start</Popup>
                    </Marker>
                  )}
                  {coords && coords.length && (
                    <Polyline positions={coords} color="red" />
                  )}
                </>
              )}
            </Map>
          </Container>
        </Container>
      </Section>
    </Layout>
  );
}
