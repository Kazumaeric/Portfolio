import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';

class Resume extends Component {
	render() {
		return(
			<div>
				<Grid>
					<Cell col={4}>
						<div style={{textAlign: 'center'}}>
							<img 
							src="https://i.imgur.com/PwpsA0q.png"
							alt="avatar"
							style={{height: '200px'}}/>
						</div>

							<h2 style={{paddingTop:'2em'}}> Zack Kuo</h2>
							<h4 style={{color: 'grey'}}>UI Designer	</h4>
							<hr style={{borderTop: '3px solid #833FB2', width: '50%'}}/>
							<p>
								您好，歡迎	
							</p>
							<hr style={{borderTop: '3px solid #833FB2', width: '50%'}}/>
							<h5>所在城市</h5>
							<p>新竹</p>
							<h5>Phone</h5>
							<p>0910-668-696</p>
							<h5>Email</h5>
							<p>zackaz@futurgata.com</p>
							<h5>Web</h5>
							<p>https://futurgata.com</p>
							<hr style={{borderTop: '3px solid #833FB2', width: '50%'}}/>
						
					</Cell>
					<Cell className="resume-right-col" col={8}>
						<h2>Education</h2>


						<Education
							startYear={2012}
							endYear={2016}
							schoolName="文化大學"
							schoolDescription="中文系畢業"
						 />

						<h2>Experience</h2>
						 
						<Experience
							startYear={2015}
							endYear={2019}
							jobName="First Job"
							jobDescription="Job Description"
						 />

						<Experience
							startYear={2014}
							endYear={2015}
							jobName="Second Job"
							jobDescription="Job Description"
						 />

						<Experience
							startYear={2013}
							endYear={2014}
							jobName="Third Job"
							jobDescription="Job Description"
						 />

						<hr style={{borderTop: '3px solid #833FB2', width: '50%'}}/>

						<h2>Skills</h2>
						<Skills
							skill="HTML/CSS"
							progress={100}
						/>
						<Skills
							skill="React"
							progress={75}
						/>
						<Skills
							skill="javascript"
							progress={80}
						/>
						<Skills
							skill="NodeJS"
							progress={65}
						/>

					</Cell>

				</Grid>
			</div>
		)
	}
}

export default Resume;