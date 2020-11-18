import React from 'react';
import './ShowButtons.css';
import Label from '../Label/Label';
import Button from '../Button';

class ShowButtons extends React.Component {
  render () {
    return (
      <div className="main"> 
        <div className="show-buttons">
          <div className="show-button">
            <Label style={{marginBottom: '12px'}} text="<Button />"/>
            <Button />
          </div>
          <div className="show-button">
            <Label style={{marginBottom: '12px'}} text="&:hover, &:focus" color="gray"/>
            <Button />
          </div>
          <div className="show-button">
          </div>
        </div>

        <div className="show-buttons">
          <div className="show-button">
            <Label style={{marginBottom: '12px'}} text='<Button variant="outline" />'/>
            <Button variant="outline"/>
          </div>
          <div className="show-button"> 
            <Label style={{marginBottom: '12px'}} text="&:hover, &:focus" color="gray"/>
            <Button variant="text"/>
          </div>
        </div>

        <div className="show-buttons">
          <div className="show-button">
            <Label style={{marginBottom: '12px'}} text='<Button variant="text" />'/>
            <Button variant="text"/>
          </div>
          <div className="show-button">
            <Label style={{marginBottom: '12px'}} text="&:hover, &:focus" color="gray"/>
            <Button variant="text"/>
          </div>
        </div>

        <div className="show-buttons">
          <div className="show-button">
            <Label style={{marginBottom: '12px'}} text='<Button disableShadow />'/>
            <Button disableShadow/>
          </div>
        </div>

        <div className="show-buttons">
          <div className="show-button">
            <Label style={{marginBottom: '12px'}} text='<Button disabled />'/>
            <Button disabled/>
          </div>
          <div className="show-button">
            <Label style={{marginBottom: '12px'}} text='<Button variant="text" disabled />'/>
            <Button variant="text" disabled/>
          </div>
        </div>

        <div className="show-buttons">
          <div className="show-button">
            <Label style={{marginBottom: '12px'}} text='<Button startIcon="local_grocery_store" />'/>
            <Button startIcon="local_grocery_store" />
          </div>
          <div className="show-button">
            <Label style={{marginBottom: '12px'}} text='<Button endIcon="local_grocery_store" />'/>
            <Button endIcon="local_grocery_store" />
          </div>
        </div>

        <div className="show-buttons">
          <div className="show-button">
            <Label style={{marginBottom: '12px'}} text='<Button size="sm" />'/>
            <Button size="sm"/>
          </div>
          <div className="show-button">
            <Label style={{marginBottom: '12px'}} text='<Button size="md" />'/>
            <Button size="md"/>
          </div>
          <div className="show-button">
            <Label style={{marginBottom: '12px'}} text='<Button size="lg" />'/>
            <Button size="lg"/>
          </div>
        </div>

        <div className="show-buttons">
          <div className="show-button">
            <Label style={{marginBottom: '12px'}} text='<Button color="default" />'/>
            <Button color="default"/>
          </div>
          <div className="show-button">
            <Label style={{marginBottom: '12px'}} text='<Button color="primary" />'/>
            <Button color="primary"/>
          </div>
          <div className="show-button">
            <Label style={{marginBottom: '12px'}} text='<Button color="secondary" />'/>
            <Button color="secondary"/>
          </div>
          <div className="show-button">
            <Label style={{marginBottom: '12px'}} text='<Button color="danger" />'/>
            <Button color="danger"/>
          </div>
        </div>

        <div className="show-buttons">
          <div className="show-button">
            <Label style={{marginBottom: '12px'}} text="&:hover, &:focus" color="gray"/>
            <Button color="default"/>
          </div>
          <div className="show-button">
            <Button color="primary"/>
          </div>
          <div className="show-button">
            <Button color="secondary"/>
          </div>
          <div className="show-button">
            <Button color="danger"/>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowButtons;