import React, { Component } from 'react';
import { connect } from '98k';

class Create extends Component {
    state = {
        image: '',
        category: 'music',
        name: '',
        count: '',
        startTime: '',
        endTime: '',
        desc: '',
    }

    render() {
        const { image, category, name, count, startTime, endTime, desc } = this.state;
        
        return (
            <form>
                <h1>
                    Create Activity
                </h1>
                <div className='form-group row'>
                    <label className='col-2 col-form-label'>Category</label>
                    <div className='col-4'>
                        <select className='form-control' value={category} onChange={this.selectCategory}>
                            <option value='music'>Music</option>
                            <option value='lecture'>Lecture</option>
                            <option value='party'>Party</option>
                            <option value='movie'>Movie</option>
                            <option value='exhibition'>Exhibition</option>
                            <option value='sport'>Sport</option>
                            <option value='travel'>Travel</option>
                            <option value='others'>Others</option>
                        </select>
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-2 col-form-label'>Activity Name</label>
                    <div className='col-4'>
                        <input className='form-control' value={name} placeholder='Activity Name' onChange={this.inputName}></input>
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-2 col-form-label'>Count</label>
                    <div className='col-4'>
                        <input className='form-control' value={count} placeholder='number' onChange={this.inputCount}></input>
                    </div>
                </div>


                <div className='form-group row'>
                    <label className='col-2 col-form-label'>Start</label>
                    <div className='col-4'>
                        <input className='form-control' value={startTime} placeholder='20xx-xx-xx' onChange={this.inputBeginTime}/>
                    </div>
                </div>
                <div className='form-group row'>
                    <label className='col-2 col-form-label'>End</label>
                    <div className='col-4'>
                        <input className='form-control' value={endTime} placeholder='20xx-xx-xx' onChange={this.inputEndTime}/>
                    </div>
                </div>

                <div className='form-group row'>
                    <label className='col-2 col-form-label'>Description</label>
                    <div className='col-4'>
                        <textarea className='form-control' rows='5' value={desc} placeholder='Details' onChange={this.inputDescription}></textarea>
                    </div>
                </div>

                <div className='form-group row'>
                    <label className='col-2 col-form-label'>Image</label>
                    <div className='col-4'>
                        <input className='form-control' type='file' accept="image/*"
                            onChange={this.selectImage}
                        />
                    </div>
                    <div className='col-4'>
                        {image && <img className='w-100' src={image}/>}
                    </div>
                </div>
                <button type='button' className='btn btn-outline-primary' onClick={this.createActivity}>Create</button>
            </form>
        );
    }

    selectCategory = e => {
        this.setState({
            category: e.target.value,
        });
    }
    inputName = e =>{
        this.setState({
            name: e.target.value
        })
    }
    inputCount = e =>{
        this.setState({
            count: e.target.value
        })
    }
    inputBeginTime = e =>{
        this.setState({
            startTime: e.target.value
        })
    }
    inputEndTime = e =>{
        this.setState({
            endTime: e.target.value
        })
    }
    inputDescription = e =>{
        this.setState({
            desc: e.target.value
        })
    }

    selectImage = e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = arg => {
            this.setState({
                image: arg.target.result
            });
        }
    }

    createActivity = () => {
        this.props.dispatch({
            type: 'home/createActivity',
            payload: {...this.state, creatorId: 1},
        });
    }
}
export default connect()(Create);
