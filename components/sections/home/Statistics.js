import CountUp from 'react-countup';

export default function Statistics() {
    return (
        <div className="tf-section-2 counter">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="tf-title pb-30" style={{ textAlign: 'center'}}>
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
                            {/* ... más items ... */}
                        </div>
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
        {/* Tu SVG actual aquí */}
    </div>
); 