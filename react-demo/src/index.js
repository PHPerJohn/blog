import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class Table extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: props.peoples
		}
	}
	
	render() {
		return (
			<table>
				<thead>
					<tr>
						<td>姓名</td>
						<td>性别</td>
						<td>年龄</td>
						<td>电话</td>
						<td>操作</td>
					</tr>
				</thead>
				<tbody>
				{this.props.peoples.map((people, index)=>{
					return (
						<tr key={index}>
							<td>{people.name}</td>
							<td>{people.sex}</td>
							<td>{people.age}</td>
							<td>{people.phone}</td>
							<td><button onClick={()=>this.props.deleteStudent({index})}>删除</button></td>
						</tr>
					);
				})}
				</tbody>
			</table>
		);
	}
}


class Fieldset extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			people: [
				{name:"0号", sex:"男", age:22, phone:"12345678901"},
				{name:"Kuuga", sex:"男", age:25, phone:"12345678902"},
				{name:"Rose", sex:"女", age:20, phone:"12345678900"}
			],
			newStudent:{name:'', sex:'男', age:0, phone:''}
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.createNewStudent = this.createNewStudent.bind(this);
		this.deleteStudent = this.deleteStudent.bind(this);
	}
	
	handleInputChange(event) {
		const name = event.target.name;
		this.setState({
			newStudent:{name: this.state.newStudent.name, sex: this.state.newStudent.sex, age: this.state.newStudent.age, phone: this.state.newStudent.phone, [name]: event.target.value}
		});
	}
	
	deleteStudent(index) {
		var people = this.state.people;
		people.splice(index.index, 1)
		this.setState({
			people: people
		});
	}
	
	createNewStudent() {
		if(this.state.newStudent.name === ''){
			alert('姓名不能空');
			return;
		}
		if(this.state.newStudent.age <= 0){
			alert('年龄不能小于0');
			return;
		}
		if(this.state.newStudent.phone === ''){
			alert('电话号码不能空');
			return;
		}
		this.state.people.unshift(this.state.newStudent)
		this.setState({
			// newStudent: {name:'', sex:'男', age:0, phone:''}
		});
	}
	
	render() {
		return (
			<div>
			<fieldset>
				<legend>学生信息录入系统</legend>
				<div>
					<span>姓名：</span>
					<input type="text" placeholder="请输入姓名" name="name" value={this.state.newStudent.name} onChange={this.handleInputChange} />
				</div>
				<div>
					<span>性别：</span>
					<select name="sex" value={this.state.newStudent.sex} onChange={this.handleInputChange}>
						<option value="男">男</option>
						<option value="女">女</option>
					</select>
				</div>
				<div>
					<span>年龄：</span>
					<input type="number" placeholder="0" name="age" value={this.state.newStudent.age} onChange={this.handleInputChange} />
				</div>
				<div>
					<span>电话：</span>
					<input type="text" placeholder="请输入电话号码" name="phone" value={this.state.newStudent.phone} onChange={this.handleInputChange} />
				</div>
				<button onClick={this.createNewStudent} >创建新用户</button>
			</fieldset>
			<Table peoples={this.state.people} deleteStudent={(key)=>this.deleteStudent(key)} />
			</div>
		);
	}
}



class App extends React.Component {
	render() {
		return (
			<Fieldset />
		);
	}
}

			
// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
