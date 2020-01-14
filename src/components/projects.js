import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = { activeTab: 0 };
	}

	toggleCategories() {
		if(this.state.activeTab === 0) {
			return (
				<div className="projects-grid">
					{/* Project 1 */}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: 'black',height: '176px', background: 'url(https://i.imgur.com/P1xLLRv.png) center / cover'}}>React Project #1</CardTitle>
						<CardText>
							這是作品A
						</CardText>
						<CardActions border>
							<Button colored>Github</Button>
							<Button colored>Codepen</Button>
							<Button colored>LiveDemo</Button>
						</CardActions>
						<CardMenu style={{coolr: '#fff'}}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
					{/* Project 2 */}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: 'black',height: '176px', background: 'url(https://i.imgur.com/P1xLLRv.png) center / cover'}}>React Project #2</CardTitle>
						<CardText>
							這是作品B
						</CardText>
						<CardActions border>
							<Button colored>Github</Button>
							<Button colored>Codepen</Button>
							<Button colored>LiveDemo</Button>
						</CardActions>
						<CardMenu style={{coolr: '#fff'}}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
					{/* Project 3 */}
					<Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
						<CardTitle style={{color: 'black',height: '176px', background: 'url(https://i.imgur.com/P1xLLRv.png) center / cover'}}>React Project #3</CardTitle>
						<CardText>
							這是作品C
						</CardText>
						<CardActions border>
							<Button colored>Github</Button>
							<Button colored>Codepen</Button>
							<Button colored>LiveDemo</Button>
						</CardActions>
						<CardMenu style={{coolr: '#fff'}}>
							<IconButton name="share" />
						</CardMenu>
					</Card>
				</div>
			)
		} else if(this.state.activeTab === 1) {
			return (
				<div><h1>This is Angular</h1></div>
			)
		} else if(this.state.activeTab === 2) {
			return (
				<div><h1>This is VueJS</h1></div>
			)
		} else if(this.state.activeTab === 3) {
			return (
				<div><h1>This is MongoDB</h1></div>
			)
		}
	}

	
	render() {
		return(
			<div className="category-tabs">
				<Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
					<Tab>React</Tab>
					<Tab>Angular</Tab>
					<Tab>Vuejs</Tab>
					<Tab>MongoDB</Tab>
				</Tabs>


				
				<Grid>
					<Cell col={12}>
						<div className="content">{this.toggleCategories()}</div>
					</Cell>
				</Grid>
			</div>
		);
	}
}

export default Projects;