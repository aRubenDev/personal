import PropTypes from 'prop-types';

export default function UpdatesIBC({ data }) {
    return (
        <div className="w-full bg-white rounded-3xl p-4 text-center">
            <h1 className="text-3xl mb-5 text-[#003366] font-[900]">Updates</h1>
            {data.map((update, index) => (
                <div className="w-full bg-[#726df6] shadow-lg my-3 rounded-lg text-white p-4 text-left text-xs" key={index}>
                    <h1 className="font-extrabold mb-2">{update.title}</h1>
                    <p>{update.description}</p>
                </div>
            ))}
        </div>
    );
}

UpdatesIBC.propTypes = {
    data: PropTypes.array
}