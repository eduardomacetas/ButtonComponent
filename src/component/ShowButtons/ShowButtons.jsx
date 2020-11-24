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
            <Label text="<Button />"/>
            <Button />
          </div>
          <div className="show-button">
            <Label text="&:hover, &:focus" color="gray3"/>
            <Button />
          </div>
        </div>

        <div className="show-buttons">
          <div className="show-button">
            <Label text='<Button variant="outline" />'/>
            <Button variant="outline"/>
          </div>
          <div className="show-button">
            <Label text="&:hover, &:focus" color="gray3"/>
            <Button variant="outline"/>
          </div>
        </div>

        <div className="show-buttons">
          <div className="show-button">
            <Label text='<Button variant="text" />'/>
            <Button variant="text"/>
          </div>
          <div className="show-button">
            <Label text="&:hover, &:focus" color="gray3"/>
            <Button variant="text"/>
          </div>
        </div>

        <div className="show-buttons">
          <div className="show-button">
            <Label text='<Button disableShadow />'/>
            <Button disableShadow/>
          </div>
        </div>

        <div className="show-buttons">
          <div className="show-button">
            <Label text='<Button disabled />'/>
            <Button disabled/>
          </div>
          <div className="show-button">
            <Label text='<Button variant="text" disabled />'/>
            <Button variant="text" disabled/>
          </div>
        </div>

        <div className="show-buttons">
          <div className="show-button">
            <Label text='<Button startIcon="local_grocery_store" />'/>
            <Button startIcon="local_grocery_store" />
          </div>
          <div className="show-button">
            <Label text='<Button endIcon="local_grocery_store" />'/>
            <Button endIcon="local_grocery_store" />
          </div>
        </div>

        <div className="show-buttons">
          <div className="show-button">
            <Label text='<Button size="sm" />'/>
            <Button size="sm"/>
          </div>
          <div className="show-button">
            <Label text='<Button size="md" />'/>
            <Button size="md"/>
          </div>
          <div className="show-button">
            <Label text='<Button size="lg" />'/>
            <Button size="lg"/>
          </div>
        </div>

        <div className="show-buttons">
          <div className="show-button">
            <Label text='<Button color="default" />'/>
            <Button color="default"/>
          </div>
          <div className="show-button">
            <Label text='<Button color="primary" />'/>
            <Button color="primary"/>
          </div>
          <div className="show-button">
            <Label text='<Button color="secondary" />'/>
            <Button color="secondary"/>
          </div>
          <div className="show-button">
            <Label text='<Button color="danger" />'/>
            <Button color="danger"/>
          </div>
        </div>

        <div className="show-buttons">
          <div className="show-button">
            <Label text="&:hover, &:focus" color="gray3"/>
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