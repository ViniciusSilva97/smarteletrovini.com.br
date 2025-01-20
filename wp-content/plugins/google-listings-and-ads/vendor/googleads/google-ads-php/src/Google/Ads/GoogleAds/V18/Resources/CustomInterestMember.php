<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/ads/googleads/v18/resources/custom_interest.proto

namespace Google\Ads\GoogleAds\V18\Resources;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * A member of custom interest audience. A member can be a keyword or url.
 * It is immutable, that is, it can only be created or removed but not changed.
 *
 * Generated from protobuf message <code>google.ads.googleads.v18.resources.CustomInterestMember</code>
 */
class CustomInterestMember extends \Google\Protobuf\Internal\Message
{
    /**
     * The type of custom interest member, KEYWORD or URL.
     *
     * Generated from protobuf field <code>.google.ads.googleads.v18.enums.CustomInterestMemberTypeEnum.CustomInterestMemberType member_type = 1;</code>
     */
    protected $member_type = 0;
    /**
     * Keyword text when member_type is KEYWORD or URL string when
     * member_type is URL.
     *
     * Generated from protobuf field <code>optional string parameter = 3;</code>
     */
    protected $parameter = null;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type int $member_type
     *           The type of custom interest member, KEYWORD or URL.
     *     @type string $parameter
     *           Keyword text when member_type is KEYWORD or URL string when
     *           member_type is URL.
     * }
     */
    public function __construct($data = NULL) {
        \GPBMetadata\Google\Ads\GoogleAds\V18\Resources\CustomInterest::initOnce();
        parent::__construct($data);
    }

    /**
     * The type of custom interest member, KEYWORD or URL.
     *
     * Generated from protobuf field <code>.google.ads.googleads.v18.enums.CustomInterestMemberTypeEnum.CustomInterestMemberType member_type = 1;</code>
     * @return int
     */
    public function getMemberType()
    {
        return $this->member_type;
    }

    /**
     * The type of custom interest member, KEYWORD or URL.
     *
     * Generated from protobuf field <code>.google.ads.googleads.v18.enums.CustomInterestMemberTypeEnum.CustomInterestMemberType member_type = 1;</code>
     * @param int $var
     * @return $this
     */
    public function setMemberType($var)
    {
        GPBUtil::checkEnum($var, \Google\Ads\GoogleAds\V18\Enums\CustomInterestMemberTypeEnum\CustomInterestMemberType::class);
        $this->member_type = $var;

        return $this;
    }

    /**
     * Keyword text when member_type is KEYWORD or URL string when
     * member_type is URL.
     *
     * Generated from protobuf field <code>optional string parameter = 3;</code>
     * @return string
     */
    public function getParameter()
    {
        return isset($this->parameter) ? $this->parameter : '';
    }

    public function hasParameter()
    {
        return isset($this->parameter);
    }

    public function clearParameter()
    {
        unset($this->parameter);
    }

    /**
     * Keyword text when member_type is KEYWORD or URL string when
     * member_type is URL.
     *
     * Generated from protobuf field <code>optional string parameter = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setParameter($var)
    {
        GPBUtil::checkString($var, True);
        $this->parameter = $var;

        return $this;
    }

}

