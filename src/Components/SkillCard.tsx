import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { Skill } from '../models/Skill';

interface SkillCardProps extends TouchableOpacityProps {
  skill: Skill;
}

export const SkillCard = ({ skill, ...rest }: SkillCardProps) => {
  return (
    <TouchableOpacity style={styles.skillContainer} {...rest}>
      <Text style={styles.skillText}>{skill.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  skillContainer: {
    padding: 15,
    backgroundColor: '#1F1E25',
    alignItems: 'center',
    marginVertical: 12,
    borderRadius: 8,
  },
  skillText: {
    color: '#FFF',
    fontWeight: '500',
    fontSize: 18,
  },
});
