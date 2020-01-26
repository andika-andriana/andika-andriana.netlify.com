// package Component
import React, { Component } from "react";
import {
  Menu,
  Icon,
  Sidebar,
  Image,
  Tab,
  Label,
  Container,
  Button,
  Popup,
  Divider
} from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

// Pages Component
import Headers from "./Headers";
import Footers from "./Footers";
import Portofolios from "./Portofolios";
import Catatans from "./Catatans";
import Tentang from "./Tentang";

// Data Component
import Bios from "./data/Bios";

export default class Pages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      dimming: false
    };
    this.opensidebar = this.opensidebar.bind(this);
    this.hidesidebar = this.hidesidebar.bind(this);
  }

  opensidebar() {
    this.setState({ dimming: true });
    this.setState({ visible: true });
  }

  hidesidebar() {
    this.setState({ dimming: false });
    this.setState({ visible: false });
  }

  render() {
    const panes = [
      {
        menuItem: (
          <Menu.Item key="Portofolio">
            <Icon name="code" />
            Portofolio
            <Label color="green">6</Label>
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane attached={false} style={{ backgroundColor: "#fafafa" }}>
            <Portofolios />
          </Tab.Pane>
        )
      },
      {
        menuItem: (
          <Menu.Item key="Catatan">
            <Icon name="file pdf outline" />
            Catatan
            <Label color="green">8</Label>
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane attached={false} style={{ backgroundColor: "#fafafa" }}>
            <Catatans />
          </Tab.Pane>
        )
      },
      {
        menuItem: (
          <Menu.Item key="Tentang">
            <Popup
              content="Munculkan data saya pada sidebar"
              position="right center"
              trigger={
                <Button basic animated onClick={this.opensidebar}>
                  <Button.Content visible>Tentang Saya</Button.Content>
                  <Button.Content hidden>
                    <Icon name="arrow right" />
                  </Button.Content>
                </Button>
              }
            />
          </Menu.Item>
        ),
        render: () => (
          <Tab.Pane attached={false} style={{ backgroundColor: "#fafafa" }}>
            <Tentang />
          </Tab.Pane>
        )
      }
    ];
    return (
      <Container fluid>
        <Sidebar
          as={Menu}
          animation="push"
          direction="left"
          visible={this.state.visible}
          inverted
          vertical
        >
          <Image
            src="/images/myava.jpg"
            circular
            size="small"
            centered={true}
            style={{ marginTop: 20 }}
          />
          <Bios />
          <Divider inverted horizontal>
            <Button basic inverted animated onClick={this.hidesidebar}>
              <Button.Content visible>Close</Button.Content>
              <Button.Content hidden>
                <Icon name="arrow left" />
              </Button.Content>
            </Button>
          </Divider>
        </Sidebar>
        <Sidebar.Pusher>
          <Headers />
          <Container fluid>
            <Tab menu={{ secondary: true, pointing: true }} panes={panes} />
          </Container>
          <Footers />
        </Sidebar.Pusher>
      </Container>
    );
  }
}
