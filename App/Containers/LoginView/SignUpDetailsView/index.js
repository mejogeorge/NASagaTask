import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { styles } from './styles'
import InputBox from '@Components/InputBox'
import BarButton from '@Components/BarButton'
import RadioButtonList from '@Components/RadioButtonList'
import I18n from 'react-native-i18n'

const radioListData = [
  { id: 0, text: I18n.t('loginOrSignUpView.Owner') },
  { id: 1, text: I18n.t('loginOrSignUpView.tenanat') },
  {
    id: 2,
    text: I18n.t('loginOrSignUpView.bothOwnerAndTenant')
  }
]

export default class SignUpDetailsView extends Component {
  onPress = selectedId => {
    this.selectedId = selectedId
  }
  render () {
    return (
      <View>
        <View style={styles.nameViewContainer}>
          <InputBox placeHoldertext={I18n.t('loginOrSignUpView.fullNAme')} />
        </View>
        <Text style={styles.detailsViewText}>Who are you?</Text>
        <RadioButtonList
          data={radioListData}
          onPress={this.onPress}
          initialSelection={radioListData[0].id}
        />
        <View style={styles.signUpButtonView}>
          <BarButton
            // radius={{ borderRadius: 4 }}
            buttonText={I18n.t('signUp')}
          />
        </View>
      </View>
    )
  }
}
