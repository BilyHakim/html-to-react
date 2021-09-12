import React from 'react';
import propTypes from 'prop-types';

export default function Card(props) {
  const className = ['tiles-item'];
  className.push(props.className);
  return (
    <div className={className.join(' ')}>
      <div className={`tiles-item-inner ${props.hasShadow ? ' has-shadow' : ''}`}>{props.children}</div>
    </div>
  );
}

Card.propTypes = {
  hasShadow: propTypes.bool,
  className: propTypes.string,
};

/*
<div className="pricing-item-content">
          <div className="pricing-item-header pb-24 mb-24">
            <div className="pricing-item-price mb-4">
              <span className="pricing-item-price-currency h2">$</span>
              <span className="pricing-item-price-amount h1 pricing-switchable" data-pricing-monthly="34" data-pricing-yearly="27">
                27
              </span>
            </div>
            <div className="text-xs text-color-low">Lorem ipsum is a common text</div>
          </div>
          <div className="pricing-item-features mb-40">
            <div className="pricing-item-features-title h6 text-xs text-color-high mb-24">What’s included</div>
            <ul className="pricing-item-features-list list-reset text-xs mb-32">
              <li className="is-checked">Excepteur sint occaecat velit</li>
              <li className="is-checked">Excepteur sint occaecat velit</li>
              <li className="is-checked">Excepteur sint occaecat velit</li>
              <li>Excepteur sint occaecat velit</li>
              <li>Excepteur sint occaecat velit</li>
            </ul>
          </div>
        </div>
        <div className="pricing-item-cta mb-8">
          <a className="button button-primary button-block" href="#">
            Start free trial
          </a>
        </div>
*/
