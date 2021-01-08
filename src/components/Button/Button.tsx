import { connect, ConnectedProps } from 'react-redux'
// import { reducer } from 'react-redux'
import { addToCart } from '../../utils/store/Product/productActions'

interface AppProps {
    addCart: () => void
}

type Props = {
    backgroundColor: string
}

// const mapStateToProps = (state: AppState) => {

// }

const MyButton = (props: Props) => (
    <div style={{ backgroundColor: props.backgroundColor }}>
        <button>
            Toggle is Yay
        </button>
    </div>
)

export default MyButton



// interface RootState {
//     description: string
// }

// const mapState = (state: RootState) => ({
//     description: state.description
// })

// const mapDispatch = (description: string) => {
//     addToCart: () => ({ description: description })
// }

// const connector = connect(mapState, mapDispatch)

// type PropsFromRedux = ConnectedProps<typeof connector>

// type Props = PropsFromRedux & {
//     backgroundColor: string
// }

// const MyButton = (props: Props) => (
//     <div style={{ backgroundColor: props.backgroundColor }}>
//         <button onClick={props.addToCart}>
//             Toggle is {props.description}
//         </button>
//     </div>
// )

// export default connector(MyButton)