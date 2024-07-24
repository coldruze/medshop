import React from 'react';

const Main = () => {
    return (
        <div className="main">
            <div className="main-text">
                <h1>Медицинские товары оптом и в розницу</h1>
            </div>
            <div className="main-container">
                <div className="main-item">
                    <img src="/assets/main/quality-icon.png" alt="Качество" className="main-icon"/>
                    <div className="main-item__text">
                        <h3>Отвечаем за качество</h3>
                        <p>Все медицинские товары соответствуют актуальным требованиям</p>
                    </div>
                </div>
                <div className="main-item">
                    <img src="/assets/main/consult-icon.png" alt="Консультации" className="main-icon"/>
                    <div className="main-item__text">
                        <h3>Консультируем по любым вопросам</h3>
                        <p>Ответим в течение часа в рабочее время</p>
                    </div>
                </div>
                <div className="main-item">
                    <img src="/assets/main/manufacturer-icon.png" alt="Производители" className="main-icon"/>
                    <div className="main-item__text">
                        <h3>Сотрудничаем с известными производителями</h3>
                        <p>Напрямую</p>
                    </div>
                </div>
                <div className="main-item">
                    <img src="/assets/main/delivery-icon.png" alt="Доставка" className="main-icon"/>
                    <div className="main-item__text">
                        <h3>Бережно и оперативно доставим медицинские товары</h3>
                        <p>До 5 дней по России</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Main;