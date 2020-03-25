import React, { Component } from 'react'

export default class SearchBoxForm extends Component {


sendData=(e)=> {
    e.preventDefault();
} 

    render() {
        return (
            <div>
                <form>
                    <label>
                        City Name
                        <input type="text" name="name"/>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}
