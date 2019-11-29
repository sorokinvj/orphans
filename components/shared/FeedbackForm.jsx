import React, { Fragment } from 'react';
import {
  Row,
  Col,
} from '@bootstrap-styled/v4';
import Loading from './Loading';
import SendingStatus from './SendingStatus';
import FormError from './FormError';

class FeedbackForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      nameError: false,
      emailError: false,
      messageError: false,
      isSending: false,
      isSentOK: false,
      isSentError: false,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onKeydown = this.onKeydown.bind(this);
  }

  onKeydown(event) {
    const stateField = `${event.currentTarget.name}Error`;
    this.setState({
      [stateField]: false,
    });
  }

  handleSubmit(event) {
    const { messageError, emailError } = this.state;
    const data = new FormData(event.target);
    const name = data.get('name');
    const message = data.get('message');

    if (name === '') {
      this.setState({
        nameError: true,
      });
    }

    if (message === '') {
      this.setState({
        messageError: true,
      });
    }

    if (!event.target.elements.email.checkValidity()) {
      this.setState({
        emailError: true,
      });
    }

    // отсылаем форму на api
    if (event.target.checkValidity() && !emailError && !messageError) {
      this.setState({
        isSending: true,
      });
      fetch('/sendmail', {
        method: 'POST',
        body: data,
      }).then((response) => {
        if (response.status === 200) {
          this.setState({
            isSending: false,
            isSentOK: true,
          });
        }
        if (response.status === 500) {
          this.setState({
            isSending: false,
            isSentError: true,
          });
        }
      });
    }
    event.preventDefault();
  }

  handleInputChange(event) {
    const { target } = event;
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      name, email, message,
      nameError, emailError, messageError,
      isSending, isSentOK, isSentError,
    } = this.state;

    return (
      <Row>
        <Col xs={{ size: 12 }} md={{ size: 10, offset: 1 }} lg={{ size: 8, offset: 2 }}>
          {isSending
          && (
          <>
            <SendingStatus text="Сообщение отправляется" />
            <Loading />
          </>
          )}
          {isSentOK && <SendingStatus text="Сообщение отправлено, спасибо!" />}
          {isSentError && <SendingStatus text="Что-то пошло не так, попробуйте еще раз" error />}
          {!isSending && !isSentOK && !isSentError
              && (
              <Fragment>
                <p className="call-to-action">
                    Хотите рассказать свою историю? Присылайте ее нам
                </p>
                <form className="feedback-form" onSubmit={this.handleSubmit} noValidate>
                  <input
                    name="name"
                    type="text"
                    value={name}
                    onChange={this.handleInputChange}
                    className="fullwidth"
                    placeholder="Имя*"
                    onKeyDown={this.onKeydown}
                    required
                  />
                  {nameError && <FormError text="Введите имя" />}
                  <input
                    name="email"
                    type="email"
                    value={email}
                    onChange={this.handleInputChange}
                    placeholder="E-mail*"
                    onKeyDown={this.onKeydown}
                    required
                  />
                  {emailError && <FormError text="Неверный email" />}
                  <textarea
                    name="message"
                    type="message"
                    value={message}
                    onChange={this.handleInputChange}
                    placeholder="Сообщение*"
                    onKeyDown={this.onKeydown}
                    required
                  />
                  {messageError && <FormError text="Пустое сообщение" />}
                  <button type="submit" className="form-submit">
                      Отправить
                  </button>
                </form>
              </Fragment>
              )
            }
        </Col>
      </Row>
    );
  }
}

FeedbackForm.propTypes = {
};

FeedbackForm.defaultProps = {
};

export default FeedbackForm;
