
import { RotatingLines } from 'react-loader-spinner';
import { Div } from './Loder.styled'

export const Loader = () => {
    return (
        <Div>
            <RotatingLines
            strokeColor="#7440A7"
            strokeWidth="5"
            animationDuration="0.75"
            width="96"
            visible={true}
/>
        </Div>
    )
}