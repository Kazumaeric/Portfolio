import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';

class Contact extends Component {
	render() {
		return(
			<div className="contact-body">
				<Grid className="contact-grid">
					<Cell col={6}>
						<h2>Zack Kuo</h2>
						<img src="https://i.imgur.com/PwpsA0q.png"
						alt="avatar"
						style={{height: '250px'}}
						/>
						<p style={{ width: '75%', margin: 'auto', paddingTop: '1em'}}>
							Some word for introduce. 
						</p>

					</Cell>
					<Cell col={6}>
						<h2>Contact Me</h2>
						<hr/>

						<div className="contact-list">
							<List>
							  <ListItem>
							    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
							    <i className="fa fa-phone-square" aria-hidden="true"></i> 0910-668-696</ListItemContent>
							  </ListItem>

							  <ListItem>
							    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
							    <i className="fa fa-envelope" aria-hidden="true"></i> zackaz@futurgata.com</ListItemContent>
							  </ListItem>

							  <ListItem>
							    <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
							    <i className="fa fa-skype" aria-hidden="true"></i> MyskypeId</ListItemContent>
							  </ListItem>
							</List>
						</div>

					</Cell>
				</Grid>
			</div>
		)
	}
}

export default Contact;