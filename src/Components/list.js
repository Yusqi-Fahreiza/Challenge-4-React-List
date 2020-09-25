import React, {Component} from "react";  
import $ from "jquery";

class List extends Component {
	constructor(){
        super();  
        this.state = {  
          itemm : [  
            {id: "1", nama: "kentang"},  
            {id: "2", nama: "wortel"},  
            {id: "3", nama: "bawang"},  
          ],  
          id: "",  
          nama: "",  
          action: "" 
        }
	}
	
	bind = (event) => {  
		this.setState({[event.target.name]: event.target.value});
  	}  
	
  	SaveItemm = (event) =>{  
		event.preventDefault();  
		// temp digunakan untuk menyimpan sementara  
		// data array itemm  
		let temp = this.state.itemm;  
	
		if (this.state.action === "insert") {  
		  // temp akan ditambahkan dengan data itemm yang baru  
		  // sesuai dengan data yang dimasukkan pada form  
		  temp.push({  
				id: this.state.id,  
				nama: this.state.nama,  
		  });  
		} else if (this.state.action === "update") {  
		  // mencari index data yang akan diubah  
		  let index = temp.findIndex(item => item.id === this.state.id);  
		  // mengubah data array sesuai dengan masukan pada form  
		  temp[index].nama = this.state.nama;  
		}  
	
		// array itemm diupdate dengan nilai data temp  
		this.setState({itemm: temp});  
	
		// menutup modal  
		// $("#modal").modal('hide');  
  	}  
	
  	Add = () => {
		// $("#modal").modal('show');  
		// mengosongkan nilai id dan nama  
		// pada saat tombol add ditekan  
		this.setState({  
	  		id: "",  
	  		nama: "",  
	  		action: "insert"  
		});  
  	}  
	
  	Edit = (item) => {
		// $("#modal").modal('show');  
		this.setState({  
	  		id: item.id,  
	  		nama: item.nama,  
	  		action: "update"  
		});  
  	}  
	
  	Drop = (index) => {  
		// temp digunakan untuk menyimpan sementara  
		// data array itemm  
		let temp = this.state.itemm;  
	
		// menghapus data pada index yang dihapus  
		temp.splice(index,1);  
	
		// array itemm diupdate dengan nilai data temp  
		this.setState({itemm: temp});  
  	}
      
	render(){  
	    return (
            <div className="container">  
				<div className="card">
					<div className="card-header">
						<h2>Petugas Kasir : Yusqi Fahreiza </h2>
					</div>
				</div>
	            { /* generate list */ }  
	            <ul className="list-group">  
	            {this.state.itemm.map((item,index) => {  
	                return (  
	                <li className="list-group-item" key={index}>  
	                    <h5 className="text-info">{item.nama}</h5>  
	                    <h6>ID: {item.id}</h6>    
	  
	                    <button className="btn btn-sm btn-primary m-1" onClick={() => this.Edit(item)}  
	                    data-toggle="modal" data-target="#modal">  
	                    Edit  
	                    </button>  
	                    <button className="btn btn-sm btn-danger m-1" onClick={() => this.Drop(index)}>  
	                    Hapus  
	                    </button>  
	                </li>  
	                );  
	            })}  
	            </ul>  
	            <button className="btn btn-sm btn-success m-3" onClick={this.Add}  
	            data-toggle="modal" data-target="#modal">  
	            Tambah Data  
	            </button>  
	  
	            { /* elemen form modal */ }  
	            <div className="modal fade" id="modal">  
	            <div className="modal-dialog">  
	                <div className="modal-content">  
	                <div className="modal-header bg-success text-white">  
	                    <h5>Form Penambahan Item</h5>  
	                </div>  
	                <form onSubmit={this.SaveItemm}>  
	                <div className="modal-body">  
	                    ID  
	                    <input type="text" name="id" className="form-control" onChange={this.bind}  
	                    value={this.state.id} />  
	                    Item  
	                    <input type="text" name="nama" className="form-control" onChange={this.bind}  
	                    value={this.state.nama} />    
	                </div>  
	                <div className="modal-footer">  
	                    <button type="submit" className="btn btn-primary">  
	                    Simpan  
	                    </button>  
	                </div>  
	                </form>  
	                </div>  
	            </div>  
	            </div>  
	        </div>
	    );  
	}  
}

export default List;