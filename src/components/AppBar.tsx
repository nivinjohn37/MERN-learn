import {SearchBar} from "./SearchBar"
export const AppBar = () => {
    return(<div className="flex justify-between">
        <div className="text-md inline-flex items-center p-3">
            Youtube
        </div>
        <div>
            <SearchBar/>
        </div>
        <div className="text-md inline-flex items-center p-3">
            Sign in
        </div>

    </div>)
};
