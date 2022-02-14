// import React, {Component, Fragment} from 'react';
// import Modal from '../../components/UI/Modal/Modal'


// const errorHandler = (WrappedComponent, axios) => {
//     return class extends Component {

//         state={
//             error: null
//         }

//         componentDidMount(){
//             axios.interceptors.request.use(req => {
//                 this.setState({error: null})
//             })
//             axios.interceptors.response.use(null, error => {
//                 this.setState({error: error})
//             })
//         }

//     render() { 
//         return ( 
//             <Fragment>
//                 <Modal>
//                     Something went wrong
//                 </Modal>
//                 <WrappedComponent>
//                     {...this.props}    
//                 </WrappedComponent>
//             </Fragment>
//          );
//     }
// }
// }

 
// export default errorHandler;