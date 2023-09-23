import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import type {PropsWithChildren} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

type IconProps = PropsWithChildren<{
  name: string;
}>;

export default function icons({name}: IconProps) {
  switch (name) {
    case 'circle':
      return <Icon name="circle-thin" size={38} color={'#f7cd2e'} />;
      break;
    case 'cross':
      return <Icon name="times" size={38} color={'#38cc77'} />;
      break;

    default:
      return <Icon name="pencil" size={38} color={'#0d0d0d'} />;
      break;
  }
}

const styles = StyleSheet.create({});
