import React from 'react'
import { Card, Image } from 'semantic-ui-react'

import './UserCard.css';

const UserCard = ({name, date, description, img}) => (
    <div className='UserCard'>
        <Card>
            <Image src={img} wrapped ui={false} />
            <Card.Content>
                <Card.Header> {name} </Card.Header>
                <Card.Meta>
                    <span className='date'> {date} </span>
                </Card.Meta>
                <Card.Description> {description} </Card.Description>
            </Card.Content>
        </Card>
    </div>
)

export default UserCard