import React from 'react'
import { Card, Grid } from 'semantic-ui-react';
import Accordion from '../Accordion/Accordion';

//import setPeople from '../App'

function People({ data }) {
   // const { id, name, height, hair_color, mass, gender, birth_year, people } = results.data;

    return (
        <Accordion>
            <>
                <h1>People</h1>
                {console.log("hi", data)}
                {console.log("hello",data&&data[0]&&data[0].name)}
                    {data && data.map((people, key) => {
                         (
                            <Accordion.Item key={key}>
                                <Card>
                                     <Card.Content>
                                         {console.log(people&&people.name)}
                                        <Accordion.Collapsed id={people}>{people}</Accordion.Collapsed>
                                         <Card.Header>{people && people.name}Brian</Card.Header>
                                        <Accordion.Expanded>
                                        <Card.Description>
                                                <strong>Height</strong>
                                                <p>{people.height}</p>
                                                <strong>Mass</strong>
                                                <p>{people.mass}</p>
                                                <strong>Hair_color</strong>
                                                <p>{people.hair_color}</p>
                                                <strong>Gender</strong>
                                                <p>{people.gender}</p>
                                                <strong>Birth_year</strong>
                                                <p>{people.birth_year}</p>
                                                <strong>Eye_color</strong>
                                                <p>{people.eye_color}</p>
                                                </Card.Description>    
                                            </Accordion.Expanded> 
                                </Card.Content>
                                </Card>
                                </Accordion.Item>
                    )
                })}
            </>
            </Accordion>
    )
}
export default People;
