class SimpleSession < ActiveRecord::Base
  attr_accessible :session_key, :last_answered_question_id

  def tally(submitted_choice, correct_choice)
    if submitted_choice.id == correct_choice.id
      self.num_correct += 1
    else
      self.num_incorrect += 1
    end
    self.save!
  end
end
