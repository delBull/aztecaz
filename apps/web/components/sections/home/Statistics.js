import CountUp from 'react-countup';

export default function Statistics() {
    return (
        <div className="tf-section-2 counter">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-12">
                        <div style={{ padding: '30px' }}></div>
                        <h2 className="tf-title pb-30 text-center w-full" style={{ color: 'white' }}>
                            Estadísticas
                        </h2>
                        <div className="counter__body-1">
                            <StatItem
                                value={200}
                                suffix="B+"
                                title="Valor Antes de la crisis financiera 2008"
                            />
                            <Separator />
                            <StatItem
                                value={300}
                                suffix="B+"
                                title="Después de 2009 el valor del mercado inmobiliario"
                            />
                            <Separator />
                            <StatItem
                                value={2010}
                                title="Adopción de tecnologías; AI, AR, Blockchain"
                            />
                            <Separator />
                            <StatItem
                                value={87}
                                suffix="%"
                                title="De todos los tokens de valor provienen del sector inmobiliario"
                            />
                        </div>
                        <div style={{ padding: '30px' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

const StatItem = ({ value, suffix = '', title }) => (
    <div className="counter-1">
        <div className="number-counter">
            <span className="number">
                <CountUp
                    end={value}
                    duration={2}
                    enableScrollSpy
                    scrollSpyOnce
                    suffix={suffix}
                />
            </span>
        </div>
        <h6 className="title">{title}</h6>
    </div>
);

const Separator = () => (
    <div className="space">
        <svg width={80} height={19} viewBox="0 0 80 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect opacity="0.2" x="0.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
            <circle opacity="0.2" cx={40} cy="9.5" r={9} stroke="white" />
            <circle opacity="0.2" cx={40} cy="9.5" r="4.5" fill="white" />
            <rect opacity="0.2" x="49.75" y="9.25" width="29.5" height="0.5" stroke="white" strokeWidth="0.5" strokeDasharray="4 2" />
        </svg>
    </div>
);
